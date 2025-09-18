import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  variant?: "default" | "hero";
}

const SocialLinks = ({ className = "", variant = "default" }: SocialLinksProps) => {
  const socials = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
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