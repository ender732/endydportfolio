import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-card">
      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        {!imageError ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
          />
        ) : (
          // ✅ Fallback when image fails to load
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="text-center">
              <Code2 className="h-16 w-16 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold text-primary">{title}</p>
              <p className="text-xs text-muted-foreground">Project Screenshot</p>
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="default" size="sm" className="flex-1" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;