// Trainer image mappings
import GheorgheGhirjev from "@/assets/GheorgheGhirjev.jpeg";
import DanielVrabii from "@/assets/DanielVrabii.jpeg";
import IonCaruta from "@/assets/IonCaruta.jpeg";
import GrigoreCiobanu from "@/assets/GrigoreCiobanu.jpeg";
import VladislavMokluza from "@/assets/VladislavMokluza.jpeg";

export const trainerImageMap: Record<number, string> = {
  1: GheorgheGhirjev,
  2: DanielVrabii,
  3: IonCaruta,
  4: GrigoreCiobanu,
  5: VladislavMokluza,
};

export const getTrainerImage = (trainerId: number, fallbackUrl: string): string => {
  return trainerImageMap[trainerId] || fallbackUrl;
};
