-- Update course images with new generated images
UPDATE courses SET image = '/src/assets/course-python-new.jpg' WHERE id = 'python-junior-beginner';
UPDATE courses SET image = '/src/assets/course-arduino-new.jpg' WHERE id = 'arduino-fundamentals';
UPDATE courses SET image = '/src/assets/course-embedded-c-new.jpg' WHERE id = 'embedded-c-programming';
UPDATE courses SET image = '/src/assets/course-pcb-design-new.jpg' WHERE id = 'pcb-design';
UPDATE courses SET image = '/src/assets/course-cpp-new.jpg' WHERE id = 'cpp-embedded';
UPDATE courses SET image = '/src/assets/course-iot-new.jpg' WHERE id = 'iot-esp32';
UPDATE courses SET image = '/src/assets/course-software-testing-automotive-new.jpg' WHERE id = 'software-testing-automotive';