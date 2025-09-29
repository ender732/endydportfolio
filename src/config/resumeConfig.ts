// Resume configuration
export const resumeConfig = {
  enabled: import.meta.env.VITE_ENABLE_RESUME_DOWNLOAD === 'true',
  fileName: import.meta.env.VITE_RESUME_FILENAME || 'resume.pdf',
  downloadName: import.meta.env.VITE_RESUME_DOWNLOAD_NAME || 'Resume.pdf',
  // For external hosting (more secure)
  externalUrl: import.meta.env.VITE_RESUME_EXTERNAL_URL || null,
};

export const getResumeUrl = () => {
  if (resumeConfig.externalUrl) {
    return resumeConfig.externalUrl;
  }
  return `/${resumeConfig.fileName}`;
};

export const isResumeAvailable = () => {
  return resumeConfig.enabled && (resumeConfig.externalUrl || resumeConfig.fileName);
};