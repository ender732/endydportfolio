import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
// SiX from "react-icons/si" is the correct icon for X (formerly Twitter).
// You can update the label in the socials array to "X" for clarity.
interface SocialLinksProps {
  className?: string;
  variant?: "default" | "hero";
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "", variant = "default" }) => {
  const socials = [
    { icon: SiGithub, href: `${import.meta.env.VITE_GITHUB_URL}`, label: "GitHub" },
    { icon: SiLinkedin, href: `${import.meta.env.VITE_LINKEDIN_URL}`, label: "LinkedIn" },
    { icon: SiX, href: `${import.meta.env.VITE_X_URL}`, label: "Twitter" },
    { icon: Mail, href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`, label: "Email" }
  ];

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