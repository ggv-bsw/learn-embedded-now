# Course Translations Guide

This application supports multi-language content for courses stored in the Supabase database.

## Supported Languages

- **English (en)** - Default language
- **Romanian (ro)** - Translation fields end with `_ro`
- **Russian (ru)** - Translation fields end with `_ru`

## Database Structure

All translatable content is stored in the following tables with translation columns:

### 1. Courses Table
- `title`, `title_ro`, `title_ru`
- `subtitle`, `subtitle_ro`, `subtitle_ru`
- `description`, `description_ro`, `description_ru`
- `category`, `category_ro`, `category_ru`

### 2. Instructors Table
- `title`, `title_ro`, `title_ru`
- `bio`, `bio_ro`, `bio_ru`

### 3. Course Curriculum Table
- `title`, `title_ro`, `title_ru`

### 4. Curriculum Lessons Table
- `title`, `title_ro`, `title_ru`

### 5. Course Features Table
- `feature`, `feature_ro`, `feature_ru`

### 6. Course Requirements Table
- `requirement`, `requirement_ro`, `requirement_ru`

### 7. Course Outcomes Table
- `outcome`, `outcome_ro`, `outcome_ru`

## How Translations Work

The `useCourses` hook automatically fetches the appropriate translation based on the user's selected language:

```typescript
const { language } = useLanguage();
const { courses, loading, error } = useCourses();
```

The hook uses the `getTranslatedField` helper function that:
1. Checks if Romanian translation exists when language is 'ro'
2. Checks if Russian translation exists when language is 'ru'
3. Falls back to English if no translation is available

## Adding Translations

### Via Supabase Dashboard

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/wzdlhukymsjittdyuddr/editor)
2. Navigate to the table you want to translate
3. Find the row you want to add translations to
4. Fill in the `_ro` or `_ru` columns with translated content

### Via SQL Migration

```sql
-- Example: Adding Romanian and Russian translations for a course
UPDATE public.courses
SET 
  title_ro = 'Python pentru Începători – Nivel Junior',
  subtitle_ro = '20 lecții în 10 săptămâni...',
  description_ro = 'Un curriculum practic pentru începători...',
  category_ro = 'Python'
WHERE id = 'python-junior-beginner';

UPDATE public.courses
SET 
  title_ru = 'Python для начинающих – Младший уровень',
  subtitle_ru = '20 уроков за 10 недель...',
  description_ru = 'Практический курс для начинающих...',
  category_ru = 'Python'
WHERE id = 'python-junior-beginner';
```

### Translation Priority

When displaying content, the system follows this priority:
1. User's selected language translation (if available)
2. English (default fallback)

## Testing Translations

1. Change language using the language selector in the navigation
2. Verify that course titles, descriptions, and other content update
3. If translations are missing, English will be shown automatically

## Best Practices

1. **Consistency**: Keep the meaning consistent across all languages
2. **Completeness**: Try to translate all fields, not just some
3. **Quality**: Use professional translators for important content
4. **Testing**: Always test translations in the actual UI

## Translation Coverage

To check which courses have translations:

```sql
-- Check Romanian translation coverage
SELECT 
  id,
  title,
  CASE 
    WHEN title_ro IS NOT NULL THEN '✓' 
    ELSE '✗' 
  END as has_ro_title,
  CASE 
    WHEN description_ro IS NOT NULL THEN '✓' 
    ELSE '✗' 
  END as has_ro_description
FROM public.courses;

-- Check Russian translation coverage
SELECT 
  id,
  title,
  CASE 
    WHEN title_ru IS NOT NULL THEN '✓' 
    ELSE '✗' 
  END as has_ru_title,
  CASE 
    WHEN description_ru IS NOT NULL THEN '✓' 
    ELSE '✗' 
  END as has_ru_description
FROM public.courses;
```

## Future Enhancements

- Add more languages by creating new `_xx` columns
- Implement a translation management interface
- Add automated translation using AI services
- Track translation completeness metrics
