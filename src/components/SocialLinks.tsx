import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { getSocialConfig } from "@/config/socialConfig";

interface SocialLinksProps {
  className?: string;
  variant?: "default" | "hero";
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "", variant = "default" }) => {
  const config = getSocialConfig();
  
  // Debug: Log the configuration (remove this in production)
  console.log('Social config:', config);
  
  // Don't render anything if social links are disabled
  if (!config.enabled) {
    return null;
  }

  const socials = [
    { 
      icon: SiGithub, 
      href: config.links.github, 
      label: "GitHub"
    },
    { 
      icon: SiLinkedin, 
      href: config.links.linkedin, 
      label: "LinkedIn"
    },
    { 
      icon: SiX, 
      href: config.links.twitter, 
      label: "Twitter"
    },
    { 
      icon: Mail, 
      href: config.links.email ? `mailto:${config.links.email}` : null, 
      label: "Email"
    }
  ].filter(social => social.href && social.href !== "#");

  return (
    <div className={`flex gap-3 ${className}`}>
      {socials.map((social) => (
        <Button
          key={social.label}
          variant={variant === "hero" ? "glass" : "outline"}
          size="icon"
          className="hover:scale-110 transition-transform duration-300"
          asChild
        >
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;