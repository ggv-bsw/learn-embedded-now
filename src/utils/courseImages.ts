// Course image mappings
import coursePython from '@/assets/course-python.jpg';
import coursePythonNew from '@/assets/course-python-new.jpg';
import coursePcbDesign from '@/assets/course-pcb-design.jpg';
import coursePcbDesignNew from '@/assets/course-pcb-design-new.jpg';
import coursePcbFundamentals from '@/assets/course-pcb-fundamentals.jpg';
import courseCpp from '@/assets/course-cpp.jpg';
import courseCppNew from '@/assets/course-cpp-new.jpg';
import courseCppBsw from '@/assets/course-cpp-bsw.jpg';
import courseSoftwareTesting from '@/assets/course-software-testing-automotive.jpg';
import courseSoftwareTestingNew from '@/assets/course-software-testing-automotive-new.jpg';
import courseEmbeddedC from '@/assets/course-embedded-c.jpg';
import courseEmbeddedCNew from '@/assets/course-embedded-c-new.jpg';
import courseIot from '@/assets/course-iot.jpg';
import courseIotNew from '@/assets/course-iot-new.jpg';
import courseArduino from '@/assets/course-arduino.jpg';
import courseArduinoNew from '@/assets/course-arduino-new.jpg';
import courseAutomotiveQa from '@/assets/course-automotive-qa.jpg';

export const courseImageMap: Record<string, string> = {
  '/src/assets/course-python.jpg': coursePython,
  '/src/assets/course-python-new.jpg': coursePythonNew,
  '/src/assets/course-pcb-design.jpg': coursePcbDesign,
  '/src/assets/course-pcb-design-new.jpg': coursePcbDesignNew,
  '/src/assets/course-pcb-fundamentals.jpg': coursePcbFundamentals,
  '/src/assets/course-cpp.jpg': courseCpp,
  '/src/assets/course-cpp-new.jpg': courseCppNew,
  '/src/assets/course-cpp-bsw.jpg': courseCppBsw,
  '/src/assets/course-software-testing-automotive.jpg': courseSoftwareTesting,
  '/src/assets/course-software-testing-automotive-new.jpg': courseSoftwareTestingNew,
  '/src/assets/course-embedded-c.jpg': courseEmbeddedC,
  '/src/assets/course-embedded-c-new.jpg': courseEmbeddedCNew,
  '/src/assets/course-iot.jpg': courseIot,
  '/src/assets/course-iot-new.jpg': courseIotNew,
  '/src/assets/course-arduino.jpg': courseArduino,
  '/src/assets/course-arduino-new.jpg': courseArduinoNew,
  '/src/assets/course-automotive-qa.jpg': courseAutomotiveQa,
};

export const getCourseImage = (imagePath: string): string => {
  return courseImageMap[imagePath] || imagePath;
};
