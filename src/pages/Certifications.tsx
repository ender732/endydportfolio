import CertificationCard from "@/components/CertificationCard";
import { motion } from "framer-motion";

const Certifications = () => {
  // Using your actual Credly badge URLs - the embedded badges will work
  const certifications = [
    {
      title: "CompTIA Cybersecurity Analyst (CySA+)",
      issuer: "CompTIA",
      date: "August 2025",
      credentialId: "COMP001022663449",
      credentialUrl: "https://www.credly.com/badges/0a502340-9c5b-49ac-acb9-0536d3f89fd6/public_url",
      // Fallback to a generic CompTIA badge or placeholder
      image: "https://images.credly.com/size/340x340/images/dcd99b5b-da24-40a6-9364-62126d590c37/blob",
      isCredlyBadge: true,
      embedCode: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="0a502340-9c5b-49ac-acb9-0536d3f89fd6" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco", 
      date: "June 2025",
      credentialId: "7e59f5ab-5b9a-4fcf-8985-79fddafde497",
      credentialUrl: "https://www.credly.com/badges/7e59f5ab-5b9a-4fcf-8985-79fddafde497/public_url",
      image: "https://images.credly.com/size/340x340/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/image.png",
      isCredlyBadge: true,
      embedCode: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="7e59f5ab-5b9a-4fcf-8985-79fddafde497" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
    },
    {
      title: "Endpoint Security",
      issuer: "Cisco",
      date: "June 2025", 
      credentialId: "256ba621-c3f9-453a-872c-74a9a1b24f1b",
      credentialUrl: "https://www.credly.com/badges/256ba621-c3f9-453a-872c-74a9a1b24f1b/public_url",
      // This one is working - keep it
      image: "https://images.credly.com/size/340x340/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/EndpointSecurity.png",
      isCredlyBadge: true,
      embedCode: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="256ba621-c3f9-453a-872c-74a9a1b24f1b" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
    },
    {
      title: "Linux Essentials Certificate", 
      issuer: "Linux Professional Institute",
      date: "March 2025",
      credentialId: "9e603212-c8d4-47d2-9b52-844d88fbb6a6",
      credentialUrl: "https://www.credly.com/badges/9e603212-c8d4-47d2-9b52-844d88fbb6a6/public_url",
      image: "https://images.credly.com/size/340x340/images/1d36cb36-20fc-4961-8d70-6307c015d1aa/blob",
      isCredlyBadge: true,
      embedCode: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="9e603212-c8d4-47d2-9b52-844d88fbb6a6" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
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
            Professional certifications demonstrating expertise in cybersecurity,
            network security, endpoint protection, and Linux system administration.
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

        {/* Focus on the Interactive Embedded Badges - These WILL work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Official Certification Badges</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            These are my official, verifiable certification badges from Credly. Click any badge to verify directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {certifications.map((cert) => (
              <div
                key={`embed-${cert.title}`}
                className="certification-embed bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                dangerouslySetInnerHTML={{ __html: cert.embedCode }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;