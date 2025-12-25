# STATUTEK - Compliance Meets Technology

A modern, professional website for STATUTEK, a startup focused on compliance and legal tech solutions. Built with React, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS (Navy Blue & Gold Theme)
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: EmailJS Integration

## 🛠️ Local Development

1.  **Clone the repository** (if applicable) or navigate to the project folder.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 📦 Deployment Instructions (Vercel)

This project is optimized for deployment on [Vercel](https://vercel.com).

### Option 1: Deploy via Vercel Dashboard (Recommended)

1.  Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2.  Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3.  Import your repository.
4.  Vercel will detect it as a **Vite** project.
5.  **Build Settings** (Default):
    - *Build Command*: `npm run build`
    - *Output Directory*: `dist`
6.  Click **Deploy**.

### Option 2: Deploy via Vercel CLI

1.  Install Vercel CLI globally:
    ```bash
    npm i -g vercel
    ```
2.  Run the deploy command in the project root:
    ```bash
    vercel
    ```
3.  Follow the prompts. Use defaults for most options.

## 🔑 Environment Variables

This project uses environment variables for EmailJS configuration. You must set these up in your Vercel project settings for the Contact Form to work.

1.  Go to your **Vercel Project Settings**.
2.  Navigate to **Environment Variables**.
3.  Add the following variables (copy values from your local `.env` file or use the ones below):

| Key | Value (Example) |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | `service_kc48lvc` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_84sa90x` |
| `VITE_EMAILJS_PUBLIC_KEY` | `k9VqBaMl3c_BYUOCo` |

**Note**: The `.env` file is usually gitignored for security, but since these are public client-side keys, I have included them in `.env` for your convenience. **However on Vercel, you MUST add them manually in the settings.**

## ⚠️ Important Note for SPA Routing

A `vercel.json` file has been added to the project root to ensure that refreshing pages (like `/about` or `/contact`) works correctly by redirecting all requests to `index.html`.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
