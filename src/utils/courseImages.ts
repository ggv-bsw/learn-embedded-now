// Course image mappings
import coursePython from "@/assets/course-python.jpg";
import coursePcbDesign from "@/assets/course-pcb-design.jpg";
import courseCpp from "@/assets/course-cpp.jpg";
import courseSoftwareTesting from "@/assets/course-software-testing-automotive.jpg";

export const courseImageMap: Record<string, string> = {
  "/src/assets/course-python.jpg": coursePython,
  "/src/assets/course-pcb-design.jpg": coursePcbDesign,
  "/src/assets/course-cpp.jpg": courseCpp,
  "/src/assets/course-software-testing-automotive.jpg": courseSoftwareTesting,
};

export const getCourseImage = (imagePath: string): string => {
  return courseImageMap[imagePath] || imagePath;
};
