import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

export interface ProfessionalPack {
  id: string;
  title: string;
  description: string;
  level: string;
  price: number;
  original_price: number | null;
  duration_weeks: number;
  courses_count: number;
  discount_percentage: number | null;
  icon: string;
}

export const useProfessionalPacks = () => {
  const [packs, setPacks] = useState<ProfessionalPack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchProfessionalPacks = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from('professional_packs')
          .select('*')
          .order('created_at', { ascending: true });

        if (fetchError) throw fetchError;

        const translatedPacks = data.map((pack: any) => ({
          id: pack.id,
          title: language === 'ro' && pack.title_ro 
            ? pack.title_ro 
            : language === 'ru' && pack.title_ru 
            ? pack.title_ru 
            : pack.title,
          description: language === 'ro' && pack.description_ro 
            ? pack.description_ro 
            : language === 'ru' && pack.description_ru 
            ? pack.description_ru 
            : pack.description,
          level: pack.level,
          price: pack.price,
          original_price: pack.original_price,
          duration_weeks: pack.duration_weeks,
          courses_count: pack.courses_count,
          discount_percentage: pack.discount_percentage,
          icon: pack.icon,
        }));

        setPacks(translatedPacks);
        setError(null);
      } catch (err) {
        console.error('Error fetching professional packs:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch professional packs');
      } finally {
        setLoading(false);
      }
    };

    fetchProfessionalPacks();
  }, [language]);

  return { packs, loading, error };
};
