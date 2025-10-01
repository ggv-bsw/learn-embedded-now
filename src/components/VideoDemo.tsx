import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface VideoDemoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoDemo: React.FC<VideoDemoProps> = ({ open, onOpenChange }) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[1100px] max-h-[92vh] overflow-y-auto">
        <DialogHeader className="py-4">
          <DialogTitle className="text-xl font-bold">
            {t("form.title", "Watch Demo")}
          </DialogTitle>
          <DialogDescription>
            {t(
              "form.description",
              "Autoplay muted preview video of the course"
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="relative w-full aspect-video">
          <iframe
            allowFullScreen
            title="YouTube video player"
            allow="autoplay; encrypted-media; picture-in-picture"
            className="absolute inset-0 w-full h-full rounded-b-lg border-t border-slate-800"
            src="https://www.youtube.com/embed/LIhJxxpPDY0?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDemo;
