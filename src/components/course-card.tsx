import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  students: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

const CourseCard = ({ 
  id, 
  title, 
  description, 
  image, 
  price, 
  duration, 
  students, 
  rating, 
  level, 
  category 
}: CourseCardProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          width="400"
          height="192"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <Badge className={`absolute top-3 right-3 font-mono ${
          level === 'Beginner' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
          level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
          'bg-red-500/20 text-red-400 border-red-500/30'
        }`}>
          {level}
        </Badge>
        <div className="absolute top-3 left-3">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 font-mono">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {students.toLocaleString()}
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              {rating}
            </span>
          </div>
          <span className="text-gray-400">{duration}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">{price} mdl</span>
          </div>
          <Button 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300"
          >
            <Link to={`/courses/${id}`}>
              Enroll Now
            </Link>
          </Button>
        </div>
        
        {/* Progress indicator for enrolled courses */}
        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Quick Preview Available</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Live</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;