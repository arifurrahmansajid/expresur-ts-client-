# Expresur - Next.js Frontend

This project has been migrated from Create React App to **Next.js 14** (stable).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
expresur-ts-client-/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── providers.tsx      # Client-side providers
│   │   └── (main)/            # Public pages with Navbar/Footer
│   │       ├── layout.tsx
│   │       └── page.tsx       # Home page
│   ├── components/            # Reusable components
│   ├── context/               # React contexts
│   ├── dashboard/             # Dashboard components
│   ├── i18n/                  # Internationalization
│   ├── layout/                # Layout components
│   ├── lib/                   # Utilities
│   ├── pages/                 # Page components (to be migrated)
│   └── users/                 # User-related components
├── public/                    # Static assets
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── MIGRATION_GUIDE.md         # Detailed migration instructions

```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Migration Status

✅ **Completed:**

- Next.js 14 setup
- Package.json updated
- Configuration files created
- Basic routing structure
- Navbar component migrated

🔄 **In Progress:**

- Route migration (see MIGRATION_GUIDE.md)
- Component updates for Next.js
- Static asset organization

## 🌐 Tech Stack

- **Framework:** Next.js 14.2
- **React:** 18.3
- **TypeScript:** 5.7
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Material-UI (MUI) 7.3
- **Icons:** MUI Icons, Lucide React, React Icons
- **Animation:** Framer Motion
- **State Management:** React Context
- **Internationalization:** Custom i18n context

## 📚 Documentation

- See [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) for detailed migration instructions
- Review [Next.js Documentation](https://nextjs.org/docs) for Next.js features

## 🤝 Contributing

When adding new pages or components:

1. Use `'use client'` directive for components with hooks or interactivity
2. Follow the existing file structure
3. Use the `@/*` path alias for imports
4. Ensure TypeScript types are properly defined

## ⚠️ Important Notes

- This project uses the Next.js App Router (not Pages Router)
- Components are Server Components by default - add `'use client'` when needed
- Environment variables must start with `NEXT_PUBLIC_` for client access
- Images should be placed in the `/public` directory
