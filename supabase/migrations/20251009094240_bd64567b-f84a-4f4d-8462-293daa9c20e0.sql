-- Update all course images with new generated images
UPDATE courses SET image = '/src/assets/course-cpp-bsw.jpg' WHERE id = 'cpp-bsw-beginner-to-advanced';
UPDATE courses SET image = '/src/assets/course-pcb-fundamentals.jpg' WHERE id = 'pcb-design-fundamentals';
UPDATE courses SET image = '/src/assets/course-automotive-qa.jpg' WHERE id = 'software-testing-automotive-qa';