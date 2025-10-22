import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Code, BookOpen, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProfessionalPackCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  price: number;
  original_price: number | null;
  duration_weeks: number;
  courses_count: number;
  discount_percentage: number | null;
  icon: string;
  index: number;
  onEnroll: (id: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Cpu: Cpu,
  Code: Code,
  BookOpen: BookOpen,
};

const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || BookOpen;
};

const getLevelColor = (level: string) => {
  const colors = {
    Advanced: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Beginner to Intermediate": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "All Levels": "bg-green-500/20 text-green-400 border-green-500/30",
  };
  return colors[level as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

const getCardColors = (index: number) => {
  const colors = [
    { gradient: "from-green-500/20 to-blue-500/20", border: "border-green-500/30", icon: "text-green-400", hover: "group-hover:text-green-400", button: "bg-green-700 hover:bg-green-800" },
    { gradient: "from-blue-500/20 to-purple-500/20", border: "border-blue-500/30", icon: "text-blue-400", hover: "group-hover:text-blue-400", button: "bg-blue-600 hover:bg-blue-700" },
    { gradient: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30", icon: "text-purple-400", hover: "group-hover:text-purple-400", button: "bg-purple-600 hover:bg-purple-700" },
  ];
  return colors[index % colors.length];
};

export const ProfessionalPackCard = ({
  id,
  title,
  description,
  level,
  price,
  original_price,
  duration_weeks,
  courses_count,
  discount_percentage,
  icon,
  index,
  onEnroll,
}: ProfessionalPackCardProps) => {
  const { t } = useLanguage();
  const IconComponent = getIconComponent(icon);
  const colors = getCardColors(index);

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
      <CardHeader className="pb-4">
        <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-lg flex items-center justify-center mx-auto mb-4`}>
          <IconComponent className={`w-8 h-8 ${colors.icon}`} />
        </div>
        <CardTitle className={`text-xl font-bold text-white text-center mb-2 ${colors.hover} transition-colors`}>
          {title}
        </CardTitle>
        <Badge className={`${getLevelColor(level)} mx-auto`}>
          {level}
        </Badge>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-400 mb-6 text-center leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">{t('index.duration', 'Duration:')}</span>
            <span className="text-white font-semibold">{duration_weeks} {t('index.weeks', 'weeks')}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">{t('index.level', 'Level:')}</span>
            <span className={`font-semibold ${level === 'Advanced' ? 'text-orange-400' : level === 'Beginner to Intermediate' ? 'text-yellow-400' : 'text-green-400'}`}>
              {level}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">{t('index.coursesIncluded', 'Courses Included:')}</span>
            <span className="text-white font-semibold">{courses_count} {t('index.courses', 'Courses')}</span>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-white mb-1">{price} mdl</div>
          {original_price && (
            <div className="text-gray-400 text-sm line-through">{original_price} mdl</div>
          )}
          {discount_percentage && (
            <div className="text-green-400 text-sm font-semibold">
              {t('index.save', 'Save')} {discount_percentage}%
            </div>
          )}
        </div>

        <Button
          className={`w-full ${colors.button} text-white font-semibold`}
          onClick={() => onEnroll(id)}
        >
          {t('index.startCareerPath', 'Start Career Path')}
        </Button>
      </CardContent>
    </Card>
  );
};
