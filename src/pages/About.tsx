import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket, Heart, Lightbulb } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To create innovative digital solutions that make a meaningful impact on users and businesses worldwide.",
    },
    {
      icon: Rocket,
      title: "Vision",
      description: "Becoming a leading full-stack developer who bridges the gap between cutting-edge technology and real-world applications.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by a love for clean code, elegant design, and continuous learning in the ever-evolving tech landscape.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to deliver exceptional and future-proof solutions.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h1>

          {/* Introduction */}
          <Card className="mb-12 bg-gradient-card">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer dedicated to crafting exceptional digital experiences. 
                With expertise in modern web technologies and cloud computing, I transform complex challenges 
                into elegant, scalable solutions.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My journey in technology is driven by curiosity and a commitment to continuous improvement. 
                I believe in writing clean, maintainable code and creating user interfaces that delight and inspire.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond coding, I'm an active contributor to open-source projects and enjoy mentoring aspiring 
                developers. I stay current with industry trends through continuous learning and professional certifications.
              </p>
            </CardContent>
          </Card>

          {/* Mission & Values */}
          <h2 className="text-3xl font-bold text-center mb-8">Professional Goals & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in new opportunities and collaborations
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:contact@example.com">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Resume.pdf" download>Download Resume</a>
              </Button>
            </div>
            <SocialLinks className="justify-center" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;