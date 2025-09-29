# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/973a3989-9983-4974-a490-572a6cd4dd45

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**




**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Environment Variables

This project uses environment variables for configuration. Copy `.env.example` to `.env` and configure:

### Resume Configuration
- `VITE_ENABLE_RESUME_DOWNLOAD`: Set to 'true' to enable resume download
- `VITE_RESUME_FILENAME`: Name of the resume file in the public folder
- `VITE_RESUME_EXTERNAL_URL`: (Optional) External URL for hosting resume securely

### Adding Your Resume
1. **Simple Method**: Place your resume as `resume.pdf` in the `public/` folder
2. **Secure Method**: Host on a secure service and set `VITE_RESUME_EXTERNAL_URL`

### Deployment Note
For Netlify deployment, set environment variables in your Netlify dashboard, not in `.env` file.



