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
  videoUrl?: string;
}

const VideoDemo: React.FC<VideoDemoProps> = ({
  open,
  onOpenChange,
  videoUrl,
}) => {
  const { t } = useLanguage();

  const getEmbedUrl = (url: string | undefined): string => {
    if (!url) {
      return "https://www.youtube.com/embed/9J-0EGmsc1E?autoplay=1&mute=1&rel=0&modestbranding=1";
    }

    if (url.includes("youtube.com/embed")) {
      return `${url}${
        url.includes("?") ? "&" : "?"
      }autoplay=1&mute=1&rel=0&modestbranding=1`;
    }

    let videoId = "";

    if (url.includes("youtube.com/watch")) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get("v") || "";
    } else if (url.includes("youtu.be")) {
      videoId = url.split("/").pop()?.split("?")[0] || "";
    } else if (url.includes("youtube.com/shorts")) {
      videoId = url.split("/shorts/")[1]?.split("?")[0] || "";
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`;
    }

    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

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
            src={embedUrl}
            allowFullScreen
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute inset-0 w-full h-full rounded-lg border border-slate-800"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDemo;
