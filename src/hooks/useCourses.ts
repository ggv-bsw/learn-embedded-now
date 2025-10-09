import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

export interface Instructor {
  name: string;
  title: string;
  experience: string;
  students: number;
  rating: number;
  image: string;
  bio: string;
}

export interface CurriculumLesson {
  title: string;
  duration: string;
  type: 'video' | 'hands-on' | 'project' | 'capstone';
}

export interface CurriculumModule {
  title: string;
  lessons: CurriculumLesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  duration: string;
  students: number;
  rating: number;
  totalRatings: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  language: string;
  lastUpdated: string;
  instructor: Instructor;
  curriculum: CurriculumModule[];
  features: string[];
  requirements: string[];
  outcomes?: string[];
  link?: string;
}

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    fetchCourses();
  }, [language]);

  const getTranslatedField = (baseValue: string, roValue?: string | null, ruValue?: string | null) => {
    if (language === 'ro' && roValue) return roValue;
    if (language === 'ru' && ruValue) return ruValue;
    return baseValue;
  };

  const fetchCourses = async () => {
    try {
      setLoading(true);
      
      // Fetch courses
      const { data: coursesData, error: coursesError } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (coursesError) throw coursesError;

      if (!coursesData || coursesData.length === 0) {
        setCourses([]);
        setLoading(false);
        return;
      }

      // Fetch all related data in parallel
      const courseIds = coursesData.map(c => c.id);

      const [instructorsRes, curriculumRes, featuresRes, requirementsRes, outcomesRes] = await Promise.all([
        supabase.from('instructors').select('*').in('course_id', courseIds),
        supabase.from('course_curriculum').select('*').in('course_id', courseIds).order('order_index'),
        supabase.from('course_features').select('*').in('course_id', courseIds).order('order_index'),
        supabase.from('course_requirements').select('*').in('course_id', courseIds).order('order_index'),
        supabase.from('course_outcomes').select('*').in('course_id', courseIds).order('order_index'),
      ]);

      // Fetch curriculum lessons
      const curriculumIds = curriculumRes.data?.map(c => c.id) || [];
      const { data: lessonsData } = await supabase
        .from('curriculum_lessons')
        .select('*')
        .in('curriculum_id', curriculumIds)
        .order('order_index');

      // Build courses with translations
      const formattedCourses: Course[] = coursesData.map(course => {
        const instructor = instructorsRes.data?.find(i => i.course_id === course.id);
        const curriculumModules = curriculumRes.data?.filter(c => c.course_id === course.id) || [];
        const features = featuresRes.data?.filter(f => f.course_id === course.id) || [];
        const requirements = requirementsRes.data?.filter(r => r.course_id === course.id) || [];
        const outcomes = outcomesRes.data?.filter(o => o.course_id === course.id) || [];

        const curriculum: CurriculumModule[] = curriculumModules.map(module => {
          const moduleLessons = lessonsData?.filter(l => l.curriculum_id === module.id) || [];
          
          return {
            title: getTranslatedField(module.title, module.title_ro, module.title_ru),
            lessons: moduleLessons.map(lesson => ({
              title: getTranslatedField(lesson.title, lesson.title_ro, lesson.title_ru),
              duration: lesson.duration,
              type: lesson.type as 'video' | 'hands-on' | 'project' | 'capstone',
            })),
          };
        });

        return {
          id: course.id,
          title: getTranslatedField(course.title, course.title_ro, course.title_ru),
          subtitle: getTranslatedField(course.subtitle, course.subtitle_ro, course.subtitle_ru),
          description: getTranslatedField(course.description, course.description_ro, course.description_ru),
          image: course.image,
          price: Number(course.price),
          originalPrice: course.original_price ? Number(course.original_price) : undefined,
          duration: course.duration,
          students: course.students,
          rating: Number(course.rating),
          totalRatings: course.total_ratings,
          level: course.level as 'Beginner' | 'Intermediate' | 'Advanced',
          category: getTranslatedField(course.category, course.category_ro, course.category_ru),
          language: course.language,
          lastUpdated: course.last_updated,
          instructor: instructor ? {
            name: instructor.name,
            title: getTranslatedField(instructor.title, instructor.title_ro, instructor.title_ru),
            experience: instructor.experience,
            students: instructor.students,
            rating: Number(instructor.rating),
            image: instructor.image,
            bio: getTranslatedField(instructor.bio, instructor.bio_ro, instructor.bio_ru),
          } : {
            name: 'Unknown',
            title: 'Instructor',
            experience: '0 years',
            students: 0,
            rating: 0,
            image: '',
            bio: '',
          },
          curriculum,
          features: features.map(f => getTranslatedField(f.feature, f.feature_ro, f.feature_ru)),
          requirements: requirements.map(r => getTranslatedField(r.requirement, r.requirement_ro, r.requirement_ru)),
          outcomes: outcomes.map(o => getTranslatedField(o.outcome, o.outcome_ro, o.outcome_ru)),
        };
      });

      setCourses(formattedCourses);
      setError(null);
    } catch (err) {
      console.error('Error fetching courses:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch courses');
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  return { courses, loading, error, refetch: fetchCourses };
};

export const useCourse = (courseId: string) => {
  const { courses, loading, error } = useCourses();
  const course = courses.find(c => c.id === courseId);
  
  return { course, loading, error };
};
