/**
 * Utility functions for handling translations from database
 */

type Language = 'en' | 'ro' | 'ru';

/**
 * Get the appropriate translated field based on the current language
 * Falls back to the base English value if translation is not available
 * 
 * @param baseValue - The default English value
 * @param roValue - The Romanian translation (optional)
 * @param ruValue - The Russian translation (optional)
 * @param language - The current language setting
 * @returns The translated string or the base value
 */
export const getTranslatedField = (
  baseValue: string,
  roValue: string | null | undefined,
  ruValue: string | null | undefined,
  language: Language
): string => {
  if (language === 'ro' && roValue) return roValue;
  if (language === 'ru' && ruValue) return ruValue;
  return baseValue;
};

/**
 * Get translated array of strings from database fields
 * 
 * @param baseArray - The default English array
 * @param roArray - The Romanian translations array (optional)
 * @param ruArray - The Russian translations array (optional)
 * @param language - The current language setting
 * @returns The translated array or the base array
 */
export const getTranslatedArray = (
  baseArray: string[],
  roArray: string[] | null | undefined,
  ruArray: string[] | null | undefined,
  language: Language
): string[] => {
  if (language === 'ro' && roArray && roArray.length > 0) return roArray;
  if (language === 'ru' && ruArray && ruArray.length > 0) return ruArray;
  return baseArray;
};
