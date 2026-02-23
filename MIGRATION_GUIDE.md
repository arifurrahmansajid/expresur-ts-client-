# Next.js Migration Guide

## ✅ Completed

### 1. Package Configuration

- Updated `package.json` with Next.js 14.2.19 (stable version)
- Replaced React 19 with React 18 (compatible with Next.js 14)
- Removed `react-router-dom` and `react-scripts` (CRA dependencies)
- Added Next.js and related dependencies
- Updated TypeScript and ESLint configurations

### 2. Next.js Configuration Files

- Created `next.config.js` with basic configuration
- Created `.eslintrc.json` with Next.js ESLint config
- Updated `tsconfig.json` for Next.js compatibility
- Added path alias support (`@/*` → `./src/*`)

### 3. App Directory Structure

- Created `/src/app` directory (Next.js 14 App Router)
- Created root `layout.tsx` with global providers (Auth, Language, Toaster)
- Created `providers.tsx` for client-side context providers
- Created `(main)` route group for public pages with Navbar/Footer layout

### 4. Component Updates

- Updated `Navbar.tsx` to use Next.js `Link` and `usePathname` instead of react-router-dom
- Marked client components with `'use client'` directive
- Converted home page to Next.js page component

## 🔄 Next Steps Required

### 1. Migrate All Routes

The app currently uses react-router-dom with many routes. You need to create corresponding Next.js pages:

#### Public Routes (in `/src/app/(main)/`)

- `/quiénes-somos` → `quiénes-somos/page.tsx`
- `/CasilleroVirtual` → `CasilleroVirtual/page.tsx`
- `/rasterear` → `rasterear/page.tsx`
- `/faqpage` → `faqpage/page.tsx`
- `/contacto` → `contacto/page.tsx`
- `/login` → `login/page.tsx`
- `/register` → `register/page.tsx`
- `/recogida` → `recogida/page.tsx`
- `/nuestros` → `nuestros/page.tsx`
- `/casilleroescritorio` → `casilleroescritorio/page.tsx`

#### Dashboard Routes (in `/src/app/dashboard/`)

Create a new layout for dashboard and add:

- `layout.tsx` (using the existing Dashboard component logic)
- `locker/page.tsx`
- `packages/page.tsx`
- `user-dashboard/page.tsx`
- `consolidate/page.tsx`
- `shipments/page.tsx`
- etc.

#### Warehouse Routes (in `/src/app/warehouse/`)

- `layout.tsx` (using Warehouse component)
- `intake/page.tsx`
- `ScanningCenter/page.tsx`
- etc.

### 2. Update Components with Navigation

Search for components using react-router-dom and update them:

```bash
# Find all files using react-router-dom
grep -r "from 'react-router-dom'" src/
```

Replace:

- `import { Link } from 'react-router-dom'` → `import Link from 'next/link'`
- `import { useNavigate } from 'react-router-dom'` → `import { useRouter } from 'next/navigation'`
- `import { useLocation } from 'react-router-dom'` → `import { usePathname } from 'next/navigation'`
- `<Link to="/path">` → `<Link href="/path">`
- `navigate('/path')` → `router.push('/path')`

### 3. Handle Static Assets

Next.js handles images differently:

- Images in `/public` can be referenced as `/image.png`
- Use Next.js `Image` component for optimized images
- Move assets from `src/assets` to `/public/assets`

### 4. Update Forms and Data Fetching

- Replace any client-side data fetching with Next.js patterns
- Use Server Components where possible for better performance
- Use `'use client'` only when necessary (forms, hooks, event handlers)

### 5. Environment Variables

- Rename env variables to start with `NEXT_PUBLIC_` for client-side access
- Example: `REACT_APP_API_URL` → `NEXT_PUBLIC_API_URL`

## 🚀 Running the App

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Important Notes

1. **Client vs Server Components**: By default, components in the app directory are Server Components. Add `'use client'` at the top of files that use:
   - React hooks (useState, useEffect, etc.)
   - Event handlers
   - Browser APIs

2. **Metadata**: Only Server Components can export `metadata`. For Client Components, use the `<Head>` component or handle metadata in parent Server Components.

3. **Route Structure**: Next.js uses file-system based routing:
   - `app/page.tsx` → `/`
   - `app/about/page.tsx` → `/about`
   - `app/(group)/page.tsx` → `/` (route groups don't affect URL)

4. **Dynamic Routes**: Use brackets for dynamic segments:
   - `app/posts/[id]/page.tsx` → `/posts/:id`

## 🛠️ Migration Workflow

1. ✅ Basic setup (COMPLETED)
2. Create all route pages matching your existing routes
3. Update all components to use Next.js navigation
4. Test each route individually
5. Update data fetching patterns
6. Optimize with Server Components where possible
7. Configure environment variables
8. Test build and production mode

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
