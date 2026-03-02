# VNR Logistics Website

A modern, high-performance logistics company website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and ShadCN UI components.

## About VNR Logistics

VNR Logistics is a South African road freight company transporting cargo to Durban, Johannesburg, and Cape Town. They specialize in general road freight, car carrier transportation, container movement, and break bulk cargo.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** ShadCN UI
- **Form Validation:** React Hook Form + Zod
- **Icons:** Lucide React

## Features

- ✅ Responsive design (mobile-first)
- ✅ Sticky navigation with mobile menu
- ✅ WhatsApp floating chat button
- ✅ Contact form with validation
- ✅ Quote request form
- ✅ SEO optimized metadata
- ✅ Smooth scroll animations
- ✅ Modern gradient designs
- ✅ Professional typography

## Pages

1. **Home** - Hero section, services overview, why choose us, locations, CTA
2. **About Us** - Company overview, mission, vision, values
3. **Services** - Detailed service descriptions with features
4. **Car Carrier Division** - Specialized vehicle transport page
5. **Contact** - Contact information and contact form
6. **Request a Quote** - Comprehensive quote request form
7. **Privacy Policy** - Privacy statement

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Update Contact Information

Update the following files with actual contact details:

- `components/Footer.tsx` - Phone, email, address
- `components/WhatsAppButton.tsx` - WhatsApp number
- `app/contact/page.tsx` - Contact details

### Update Brand Colors

Brand colors are configured in `tailwind.config.ts`:

- **Primary:** Dark Blue (#0B1F3A)
- **Secondary:** Red (#D62828)
- **Accent:** White (#FFFFFF)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
vnr-logistics/
├── app/
│   ├── about/
│   ├── car-carrier/
│   ├── contact/
│   ├── privacy/
│   ├── quote/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── WhatsAppButton.tsx
└── lib/
    └── utils.ts
```

## License

All rights reserved - VNR Logistics © 2026
