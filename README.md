# DICPC Official Website (v1.0)

Professional web platform for the Daffodil International College Programming Club (DICPC). Built with a focus on speed, high-fidelity design, and secure data handling.

## 🌟 Key Features

- **Mobile-First Design**: Fully responsive interface with optimized touch targets and layouts for all devices.
- **High-Performance**: Powered by Next.js 15 Server Components and Framer Motion for 60fps animations.
- **Secure Data Handling**: Custom "Local Data" architecture ensures member privacy by keeping PII out of version control.
- **Modern UI/UX**: Glassmorphism effects, dynamic "Terminal Loader", and a premium dark mode aesthetic.

## 🚀 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4+
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React + Tabler Icons
- **Deployment**: Vercel

## ⚙️ Project Setup

### 1. Installation

```bash
npm install
```

### 2. Local Data Setup

The project uses a private **Local Data** system to protect sensitive member information (GDPR compliant).

1. Copy the example template:

   ```bash
   cp src/lib/data/local-data.example.ts src/lib/data/local-data.ts
   ```

2. Edit `src/lib/data/local-data.ts` with your actual club data.
3. **Important**: `local-data.ts` is gitignored and will never be pushed to GitHub.

### 3. Development

```bash
npm run dev
```

## 🏗️ Folder Structure

- `src/components/ui`: Atomic primitive components.
- `src/components/sections`: Page-specific high-level sections.
- `src/components/shared`: Reusable shared elements (Header, Footer, etc.).
- `src/lib/data`: Local Data source-of-truth and transformation logic.
- `src/lib/constants.ts`: Global brand and developer metadata.

## 🛡️ Privacy & Security

Personal information (phone numbers, private emails) is stored exclusively in `local-data.ts`. This file is strictly excluded from version control to prevent public data exposure.

## 📄 License

This project is private and intended for official club use.

---
*Designed & Engineered by [Madhurjo Sarker](https://facebook.com/m.sarker.rupom)*
