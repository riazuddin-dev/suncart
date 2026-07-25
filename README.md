# SunCart — Premium Sunglasses Store

Modern e-commerce storefront for premium sunglasses (Next.js + Better Auth).

## Live site

- **Production:** https://suncart-psi.vercel.app  
- GitHub: https://github.com/riazuddin-dev/suncart  

## Overview

SunCart focuses on a polished shopping UI: product browsing, detail pages, cart modal with quantity, authentication, and profile management.

## Features

- Browse all sunglasses products  
- Product details page  
- Add to cart (modal + quantity, saved in `localStorage`)  
- Email + Google authentication (Better Auth)  
- Profile management (update name & image)  
- Toast notifications  
- Responsive layout + product loading skeletons  
- Protected routes via proxy/middleware  

## Tech stack

- Next.js 16 (App Router)  
- Tailwind CSS + DaisyUI  
- Better Auth + MongoDB adapter  
- React Hook Form  
- React Toastify · Animate.css · React Icons  

## Local setup

```powershell
cd "D:\Assingmant\assinment-8\suncart"
npm install
```

Create `.env` / `.env.local` with Better Auth + Mongo settings (see your existing env keys), then:

```powershell
npm run dev
```

Open http://localhost:3000  

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | ESLint |

## Main routes

| Path | Purpose |
|------|---------|
| `/` | Home + popular products |
| `/products` | All products |
| `/products/[id]` | Product detail |
| `/login`, `/register` | Auth |
| `/profile` | Account (auth required) |

## For reviewers

1. Open `/products` (public)  
2. Register or Login  
3. Open product → Add to Cart  
4. Visit `/profile` to update name/image  

## Author

riazuddin-dev  
