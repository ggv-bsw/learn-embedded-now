import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface JuniorProgramFormProps {
  children: React.ReactNode;
}

export const JuniorProgramForm = ({ children }: JuniorProgramFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: ''
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.surname || !formData.email) {
      toast({
        title: t('juniorForm.missingInfo'),
        description: t('juniorForm.fillRequired'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-junior-inquiry', {
        body: formData
      });

      if (error) {
        console.error('Error submitting junior inquiry:', error);
        toast({
          title: t('juniorForm.error'),
          description: t('juniorForm.errorMessage'),
          variant: "destructive",
        });
        return;
      }

      toast({
        title: t('juniorForm.success'),
        description: t('juniorForm.successMessage'),
      });

      // Reset form and close dialog
      setFormData({ name: '', surname: '', email: '', phone: '' });
      setOpen(false);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: t('juniorForm.error'),
        description: t('juniorForm.errorMessage'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('juniorForm.title')}</DialogTitle>
          <DialogDescription>
            {t('juniorForm.description')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('juniorForm.name')} *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('juniorForm.namePlaceholder')}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="surname">{t('juniorForm.surname')} *</Label>
              <Input
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                placeholder={t('juniorForm.surnamePlaceholder')}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t('juniorForm.email')} *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t('juniorForm.emailPlaceholder')}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t('juniorForm.phone')}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t('juniorForm.phonePlaceholder')}
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              {t('juniorForm.cancel')}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t('juniorForm.submitting')}
                </>
              ) : (
                t('juniorForm.joinProgram')
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};