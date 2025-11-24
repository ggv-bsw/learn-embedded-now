// Trainer image mappings
// Add your trainer images to src/assets/ and map them here

export const trainerImageMap: Record<number, string> = {
  // Example: 1: "/path/to/trainer-image.jpg",
  // Add mappings for each trainer ID
};

export const getTrainerImage = (trainerId: number, fallbackUrl: string): string => {
  return trainerImageMap[trainerId] || fallbackUrl;
};
