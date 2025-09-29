import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "The Trust Anchor Micro-SaaS",
      description: "A single-purpose web tool that automates the generation of a visually appealing, shareable Proof of Review image, secured with a unique, verifiable link to instantly eliminate buyer skepticism.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://trustanchor.netlify.app",
      githubUrl: "https://github.com/star-scribe-generator",
    },
    {
      title: "EcoSense",
      description: "Gamified energy savings tracker with real-time coaching and task management tool with real-time updates",
      image: "/api/placeholder/600/400",
      technologies: ["TypeScript", "Next.js", "PostgreSQL", "WebSockets"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/eco-win-flow",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool using OpenAI API",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "FastAPI", "React", "OpenAI"],
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing full-stack development,
            modern frameworks, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;