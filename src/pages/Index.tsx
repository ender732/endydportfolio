import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SocialLinks from "@/components/SocialLinks";
import { ArrowRight, Code2, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    { icon: Briefcase, value: "10+", label: "Projects Completed" },
    { icon: Award, value: "8", label: "Certifications" },
    { icon: Code2, value: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 bg-gradient-glow"></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Crafting innovative digital solutions with modern technologies and clean code
            </p>
            <div className="flex gap-4 justify-center mb-8">
              <Link to="/projects">
                <Button variant="hero" size="lg">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="glass" size="lg">
                  About Me
                </Button>
              </Link>
            </div>
            <SocialLinks className="justify-center" variant="hero" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Professional Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300 bg-gradient-card">
                    <CardContent className="p-6">
                      <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                      <p className="text-3xl font-bold mb-2">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Building scalable APIs and server-side applications with Node.js, Python, and cloud services.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "PostgreSQL", "AWS"].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>
                  <p className="text-muted-foreground mb-4">
                    Deploying and managing applications on cloud platforms with CI/CD pipelines and containerization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Docker", "Kubernetes", "GitHub Actions"].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Designing intuitive user experiences with attention to detail and modern design principles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Responsive Design", "Accessibility", "Animation"].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:contact@example.com">Get In Touch</a>
              </Button>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;