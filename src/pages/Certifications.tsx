import CertificationCard from "@/components/CertificationCard";
import { motion } from "framer-motion";

const Certifications = () => {
  // Sample certifications data - replace with your actual certifications
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2024",
      credentialId: "AWS-123456",
      credentialUrl: "https://aws.amazon.com/verification",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "January 2024",
      credentialId: "GCP-789012",
      credentialUrl: "https://cloud.google.com/certification",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "CNCF",
      date: "November 2023",
      credentialId: "CKA-345678",
      credentialUrl: "https://cncf.io/certification",
      image: "/api/placeholder/600/400",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "September 2023",
      credentialUrl: "https://meta.com/certification",
      image: "/api/placeholder/600/400",
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
            Certifications
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in cloud
            computing, development frameworks, and modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;