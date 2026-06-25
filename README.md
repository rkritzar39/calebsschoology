# College LMS Preview Starter

A Schoology-inspired, preview-only LMS starter built with **React + Vite** for **GitHub Pages**.

## What is included

- A polished homepage/dashboard
- A course page with a sidebar and materials folders
- Announcements cards
- A shared resources page
- Public preview messaging and footer disclaimer
- GitHub Pages workflow for automatic deployment
- Dynamic Vite base path logic so project-site deployments work on GitHub Pages

## Best use

Use this for a **read-only LMS portal** where viewers can browse your courses, folders, files, and updates.

## iPhone-friendly publishing steps

You do **not** need to run Node.js on your iPhone if you upload these files directly to GitHub.

### Option A: Upload from GitHub website on iPhone
1. Create a new public GitHub repository.
2. Extract this zip in the **Files** app.
3. In Safari, open your GitHub repo.
4. Use **Add file → Upload files**.
5. Upload everything from inside this project folder.
6. Commit the files to the **main** branch.
7. Go to **Settings → Pages**.
8. Under **Build and deployment**, choose **GitHub Actions**.
9. Wait for the Actions workflow to finish.
10. Your site should appear at:
   - `https://YOUR-USERNAME.github.io/YOUR-REPO/`
   - or `https://YOUR-USERNAME.github.io/` if the repo name is `YOUR-USERNAME.github.io`

### Option B: Edit content from iPhone later
You can keep changing:
- `src/data/courseData.js` for sample course content
- `src/index.css` for colors and styling
- `src/App.jsx` and components for layout

Each new commit to **main** will trigger a fresh deployment.

## Local setup on a computer (optional)

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Important note

This starter is for **public preview mode**. Do not use it by itself for sensitive logins, grades, or private student data.
