// Social media configuration
// Set ENABLE_SOCIAL_LINKS=true in Netlify environment variables to show links
// Individual URLs are only shown if environment variables are provided

export const socialConfig = {
  enabled: import.meta.env.VITE_ENABLE_SOCIAL_LINKS === 'true',
  links: {
    github: import.meta.env.VITE_GITHUB_URL || null,
    linkedin: import.meta.env.VITE_LINKEDIN_URL || null,
    twitter: import.meta.env.VITE_X_URL || null,
    email: import.meta.env.VITE_CONTACT_EMAIL || null,
  }
};

// Fallback configuration for development
export const devSocialConfig = {
  enabled: true,
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com", 
    twitter: "https://twitter.com",
    email: "contact@example.com",
  }
};

export const getSocialConfig = () => {
  // In development, you can choose whether to use real links or placeholders
  if (import.meta.env.DEV) {
    return socialConfig.enabled ? socialConfig : devSocialConfig;
  }
  return socialConfig;
};