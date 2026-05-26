# Sri Varun Singari — Personal Portfolio

**Live:** [srivarun.in](https://srivarun.in)

A premium, modern personal portfolio website built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Quick Setup (VS Code)

### Prerequisites
- Node.js 18+ installed → [nodejs.org](https://nodejs.org)
- VS Code installed → [code.visualstudio.com](https://code.visualstudio.com)
- Git installed → [git-scm.com](https://git-scm.com)

### Step 1 — Install Dependencies

Open this folder in VS Code, then open the **Terminal** (`Ctrl + `` ` ``):

```bash
npm install
```

### Step 2 — Add Your Assets

Before running, add these files to the `public/` folder:

| File | Description |
|------|-------------|
| `public/profile.jpg` | Your professional profile photo |
| `public/resume.pdf` | Your resume PDF file |
| `public/certs/tensorflow-cert.jpg` | TensorFlow certificate image |
| `public/certs/upgrad-cert.jpg` | upGrad certificate image |
| `public/certs/udemy-dsa.jpg` | Udemy DSA certificate image |
| `public/certs/codsoft-cert.jpg` | CODSOFT internship certificate |
| `public/certs/nsic-cert.jpg` | NSIC field project certificate |

### Step 3 — Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

This creates a `dist/` folder — this is what you deploy.

---

## 🌐 Deploy to GoDaddy (srivarun.in)

### Option A — GoDaddy File Manager (Simple)

1. Run `npm run build` → get the `dist/` folder
2. Log in to [GoDaddy cPanel](https://godaddy.com) → **Hosting** → **cPanel**
3. Open **File Manager** → navigate to `public_html/`
4. Delete any existing files
5. Upload ALL contents of the `dist/` folder into `public_html/`
   - Upload `index.html`, `assets/` folder, and everything else
6. Your site is live at `srivarun.in` ✅

### Option B — GoDaddy FTP (Recommended)

1. In GoDaddy cPanel → **FTP Accounts** → note your credentials
2. Use [FileZilla](https://filezilla-project.org/) (free FTP client):
   - Host: `ftp.srivarun.in`
   - Username/Password: from GoDaddy cPanel
   - Port: `21`
3. Navigate to `public_html/` on the server
4. Upload all contents of your local `dist/` folder
5. Done ✅

### Option C — Via GitHub + GoDaddy Git Deploy

1. Push this project to a private GitHub repo
2. In GoDaddy cPanel → **Git Version Control** → connect your repo
3. Deploy from the `main` branch

### Important: .htaccess for React SPA Routing

Create a file `public/.htaccess` with this content:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

This ensures page refresh doesn't break (React Router compatibility).

---

## ⚙️ Customization

### Update Your Info
Edit `src/data.js` to change:
- Personal details, contact info, social links
- Projects (add/remove/edit)
- Certifications
- Skills

### Update Profile Image
Replace `public/profile.jpg` with your photo (square, min 400×400px recommended)

### Update Resume
Replace `public/resume.pdf` with your latest resume

### Add EmailJS (for contact form)
1. Create account at [emailjs.com](https://emailjs.com)
2. Get your Service ID, Template ID, and Public Key
3. In `src/components/Contact.jsx`, replace the `handleSubmit` function with:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { from_name: form.name, reply_to: form.email, subject: form.subject, message: form.message },
      'YOUR_PUBLIC_KEY'
    );
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  } catch {
    setStatus('error');
  }
};
```

---

## 🔧 Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Styling
- **Framer Motion** — Animations
- **React Intersection Observer** — Scroll animations

---

## 📁 File Structure

```
portfolio/
├── public/
│   ├── profile.jpg          ← Add your photo here
│   ├── resume.pdf           ← Add your resume here
│   ├── favicon.svg
│   └── certs/               ← Add certificate images here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── CursorGlow.jsx
│   │   └── ScrollToTop.jsx
│   ├── data.js              ← All your content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ❓ Troubleshooting

**`npm install` fails?**  
Make sure Node.js 18+ is installed: `node --version`

**Images not showing?**  
Check filenames match exactly (case-sensitive): `profile.jpg` not `Profile.JPG`

**White screen after deploy?**  
Add the `.htaccess` file (see above) and ensure all files from `dist/` are in `public_html/`

**Animations laggy on mobile?**  
Framer Motion animations are optimized but older phones may lag. Reduce particle count in `ParticleBackground.jsx` by changing `Math.min(80, ...)` to `Math.min(40, ...)`.

---

Designed & Developed by **Sri Varun Singari** 🚀
