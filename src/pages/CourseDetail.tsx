import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/ui/navigation";
import {
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  Calendar,
  Award,
  Download,
  Share,
  Heart,
  ArrowLeft,
  User,
} from "lucide-react";
import { featuredCourses } from "@/testData/featuredCourses";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { CourseEnrollmentForm } from "@/components/CourseEnrollmentForm";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isEnrollFormOpen, setIsEnrollFormOpen] = useState(false);

  const getCourseById = (id: string) => {
    const allCourses = [...featuredCourses];
    return allCourses.find((course) => course.id === id);
  };

  const course = getCourseById(courseId || "");
  const totalLessons = course.curriculum.reduce(
    (total, module) => total + module.lessons.length,
    0
  );
  const totalDuration = "32 hours";

  const handleEnrollNow = () => {
    setIsEnrollFormOpen(true);
  };

  const handleAddToCart = () => {
    addToCart({
      id: course.id,
      name: course.title,
      price: course.price,
      image: course.image,
    });
    toast.success("Course added to cart!");
  };

  const handleShare = async () => {
    const shareData = {
      title: course.title,
      text: course.subtitle,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success("Course shared successfully!");
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          toast.error("Failed to share course");
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy link");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      <CourseEnrollmentForm
        isOpen={isEnrollFormOpen}
        onClose={() => setIsEnrollFormOpen(false)}
        courseId={course.id}
        courseName={course.title}
        coursePrice={course.price}
      />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-primary">
            Courses
          </Link>
          <span>/</span>
          <span>{course.category}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="outline">{course.category}</Badge>
                <Badge variant="secondary">{course.level}</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">
                    ({course.totalRatings} reviews)
                  </span>
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {course.lastUpdated}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4" />
                  <span>Certificate included</span>
                </div>
              </div>
            </div>

            {/* Course Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100"
                >
                  <Play className="mr-2 w-6 h-6" />
                  Preview Course
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Learn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-2 h-2 bg-muted-foreground rounded-full flex-shrink-0 mt-2" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="curriculum">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <p className="text-muted-foreground">
                      {course.curriculum.length} modules • {totalLessons}{" "}
                      lessons • {totalDuration} total length
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple" className="w-full">
                      {course.curriculum.map((module, moduleIndex) => (
                        <AccordionItem
                          key={moduleIndex}
                          value={`module-${moduleIndex}`}
                        >
                          <AccordionTrigger className="text-left">
                            <div>
                              <div className="font-medium">{module.title}</div>
                              <div className="text-sm text-muted-foreground">
                                {module.lessons.length} lessons
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                                >
                                  <div className="flex items-center space-x-3">
                                    <Play className="w-4 h-4 text-muted-foreground" />
                                    <span className="font-medium">
                                      {lesson.title}
                                    </span>
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {lesson.type}
                                    </Badge>
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {lesson.duration}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-6">
                      {course.instructor.image ? (
                        <img 
                          src={course.instructor.image} 
                          alt={course.instructor.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center">
                          <User className="w-10 h-10 text-white" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">
                          {course.instructor.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {course.instructor.title}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center">
                            <div className="font-semibold">
                              {course.instructor.rating}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Rating
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">
                              {course.instructor.students}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Students
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">
                              {course.instructor.experience}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Experience
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">25</div>
                            <div className="text-sm text-muted-foreground">
                              Courses
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {course.instructor.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      <Star className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Reviews will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-primary">
                      ${course.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${course.originalPrice}
                    </span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    50% OFF - Limited Time
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <Button
                    className="w-full bg-gradient-hero shadow-tech hover:shadow-glow"
                    size="lg"
                    onClick={handleEnrollNow}
                  >
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-4 text-sm">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="flex items-center space-x-1"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWishlisted ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                    <span>Wishlist</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-1"
                    onClick={handleShare}
                  >
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </Button>
                </div>

                <div className="text-center text-xs text-muted-foreground mt-4">
                  30-day money-back guarantee
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lessons</span>
                  <span className="font-medium">{totalLessons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language</span>
                  <span className="font-medium">{course.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Certificate</span>
                  <span className="font-medium">Yes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
