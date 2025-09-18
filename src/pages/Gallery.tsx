import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "/api/placeholder/400/300",
      title: "AWS Certification",
      category: "certification",
    },
    {
      id: 2,
      src: "/api/placeholder/400/300",
      title: "Project Screenshot",
      category: "project",
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      title: "Conference Badge",
      category: "event",
    },
    {
      id: 4,
      src: "/api/placeholder/400/300",
      title: "Hackathon Award",
      category: "achievement",
    },
    {
      id: 5,
      src: "/api/placeholder/400/300",
      title: "Team Project",
      category: "project",
    },
    {
      id: 6,
      src: "/api/placeholder/400/300",
      title: "Google Cloud Cert",
      category: "certification",
    },
  ];

  const categories = ["all", "certification", "project", "event", "achievement"];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visual showcase of certifications, project screenshots, and professional achievements
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-foreground font-medium">{image.title}</p>
              </div>
              <button
                onClick={() => setSelectedImage(image.src)}
                className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-md rounded-full z-10"
            >
              <X className="h-4 w-4" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Gallery;