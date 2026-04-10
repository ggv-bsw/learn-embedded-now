/**
 * Centralized form validation schemas
 * Ensures consistent validation across all forms
 */

import { z } from 'zod';

/**
 * Phone number validation
 * Accepts: +1 (555) 123-4567, +1-555-123-4567, 5551234567, etc.
 */
const phoneSchema = z
  .string()
  .trim()
  .min(7, 'Phone number too short')
  .max(20, 'Phone number too long')
  .regex(/^[\d\s\-\+\(\)]{7,20}$/, 'Invalid phone number format')
  .refine(
    (val) => (val.match(/\d/g) || []).length >= 7,
    'Phone number must contain at least 7 digits'
  );

/**
 * Email validation with extended checks
 */
const emailSchema = z
  .string()
  .trim()
  .email('Invalid email address')
  .max(255, 'Email too long')
  .toLowerCase();

/**
 * Name validation (first/last name)
 * Allows: letters, spaces, hyphens, apostrophes
 */
const nameSchema = z
  .string()
  .trim()
  .min(2, 'Name too short (minimum 2 characters)')
  .max(100, 'Name too long (maximum 100 characters)')
  .regex(/^[a-zA-Z\s\-']{2,}$/, 'Name can only contain letters, spaces, hyphens, and apostrophes');

/**
 * Message/textarea validation
 */
const messageSchema = z
  .string()
  .trim()
  .min(10, 'Message too short (minimum 10 characters)')
  .max(2000, 'Message too long (maximum 2000 characters)');

/**
 * Checkout form schema (used in Checkout.tsx)
 */
export const checkoutFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
});

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

/**
 * Course inquiry form schema
 */
export const courseInquiryFormSchema = z.object({
  name: nameSchema,
  surname: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: messageSchema.optional(),
  courseId: z.string().min(1, 'Course is required'),
  subscriptionType: z.string().optional(),
});

export type CourseInquiryFormData = z.infer<typeof courseInquiryFormSchema>;

/**
 * One-on-one meeting form schema
 */
export const meetingFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  topic: z.string().min(5, 'Topic too short').max(200, 'Topic too long'),
  message: messageSchema.optional(),
  preferredDate: z.string().optional(),
  timeSlot: z.string().optional(),
});

export type MeetingFormData = z.infer<typeof meetingFormSchema>;

/**
 * Junior program form schema
 */
export const juniorProgramFormSchema = z.object({
  studentName: nameSchema,
  parentName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  age: z
    .number()
    .min(12, 'Student must be at least 12 years old')
    .max(18, 'Student must be 18 or younger'),
  experience: z.string().min(5, 'Please describe experience').max(500),
});

export type JuniorProgramFormData = z.infer<typeof juniorProgramFormSchema>;

/**
 * Trainer application form schema
 */
export const trainerApplicationFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  experience: z.number().min(1, 'Minimum 1 year experience required').max(50),
  specialization: z.string().min(3, 'Specialization too short').max(100),
  certifications: z.string().min(10, 'Please list certifications').max(1000),
  portfolio: z.string().url('Invalid portfolio URL').optional().or(z.literal('')),
  motivation: messageSchema,
});

export type TrainerApplicationFormData = z.infer<typeof trainerApplicationFormSchema>;

/**
 * Contact form schema
 */
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema.optional(),
  subject: z
    .string()
    .trim()
    .min(5, 'Subject too short (minimum 5 characters)')
    .max(100, 'Subject too long (maximum 100 characters)'),
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Utility function to validate and clean form data
 */
export const validateFormData = async <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): Promise<{ success: boolean; data?: T; errors?: Record<string, string> }> => {
  try {
    const validated = await schema.parseAsync(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const path = err.path.join('.');
        errors[path] = err.message;
      });
      return { success: false, errors };
    }
    return {
      success: false,
      errors: { form: 'Validation failed' },
    };
  }
};

/**
 * Get all validation errors as a single string (for toast notifications)
 */
export const getValidationErrorMessage = (errors: Record<string, string>): string => {
  const messages = Object.values(errors);
  return messages[0] || 'Please check your form';
};
