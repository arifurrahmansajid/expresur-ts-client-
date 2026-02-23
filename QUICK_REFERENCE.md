# Next.js Quick Reference Card

## 🚀 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Create a new route (helper)
node scripts/create-route.js <route-name>
```

## 📁 File Structure

```
src/app/
├── layout.tsx              # Root layout (has <html>, <body>)
├── page.tsx               # Home page at /
├── (main)/                # Route group (doesn't add /main to URL)
│   ├── layout.tsx        # Layout for public pages
│   ├── page.tsx          # Home page
│   └── about/
│       └── page.tsx      # /about
├── dashboard/
│   ├── layout.tsx        # Dashboard layout
│   └── settings/
│       └── page.tsx      # /dashboard/settings
└── api/                  # API routes
    └── hello/
        └── route.ts      # /api/hello
```

## 🔄 Router Migration Cheat Sheet

### Imports

```tsx
// OLD (react-router-dom)
import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom"

// NEW (Next.js)
import Link from "next/link"
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation"
```

### Components

```tsx
// OLD
<Link to="/path">Text</Link>
<Link to={`/user/${id}`}>User</Link>
<NavLink to="/path" className={({isActive}) => isActive ? 'active' : ''}>

// NEW
<Link href="/path">Text</Link>
<Link href={`/user/${id}`}>User</Link>
<Link href="/path" className={pathname === '/path' ? 'active' : ''}>
```

### Hooks

```tsx
// OLD
const navigate = useNavigate()
const location = useLocation()
const { id } = useParams()

navigate("/path")
navigate(-1) // go back
location.pathname
location.search

// NEW
const router = useRouter()
const pathname = usePathname()
const searchParams = useSearchParams()
const params = useParams()

router.push("/path")
router.back()
pathname
searchParams.get("query")
```

## 🎨 Component Patterns

### Server Component (default)

```tsx
// src/app/about/page.tsx
import MyComponent from "@/components/MyComponent"

export const metadata = {
  title: "About Us",
  description: "About our company",
}

export default function AboutPage() {
  // Can fetch data here with async/await
  return <MyComponent />
}
```

### Client Component (interactive)

```tsx
// src/components/Counter.tsx
"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Layout Component

```tsx
// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>Dashboard Nav</nav>
      {children}
    </div>
  )
}
```

## 🖼️ Images

### Import & Use

```tsx
// OLD
import logo from '../assets/logo.png';
<img src={logo} alt="Logo" />

// NEW (basic)
<img src="/assets/logo.png" alt="Logo" />

// NEW (optimized)
import Image from 'next/image';
<Image src="/assets/logo.png" alt="Logo" width={200} height={100} />
```

## 🔐 Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=secret  # Server-side only
```

```tsx
// Access in code
const apiUrl = process.env.NEXT_PUBLIC_API_URL // Client & Server
const dbUrl = process.env.DATABASE_URL // Server only
```

## 📝 When to Use 'use client'

Add `'use client'` at top of file when using:

- ✅ useState, useEffect, useReducer, etc.
- ✅ Event handlers (onClick, onChange, etc.)
- ✅ Browser APIs (window, document, localStorage)
- ✅ Context providers (sometimes)
- ✅ Third-party libraries with DOM dependencies

Don't use 'use client' for:

- ❌ Simple presentation components
- ❌ Components that just display data
- ❌ Layouts that don't have interactivity

## 🌐 Dynamic Routes

```
File Structure              URL              useParams()
app/blog/[slug]/page.tsx   /blog/hello     { slug: 'hello' }
app/shop/[...id]/page.tsx  /shop/a/b/c     { id: ['a','b','c'] }
app/docs/[[...slug]]       /docs           { slug: undefined }
```

## 🎯 Common Tasks

### Redirect

```tsx
// Server Component
import { redirect } from "next/navigation"
redirect("/login")

// Client Component
;("use client")
import { useRouter } from "next/navigation"
const router = useRouter()
router.push("/login")
```

### Get Query Params

```tsx
"use client"
import { useSearchParams } from "next/navigation"

const searchParams = useSearchParams()
const query = searchParams.get("q") // /search?q=hello
```

### Programmatic Navigation

```tsx
"use client"
import { useRouter } from "next/navigation"

const router = useRouter()
router.push("/path") // Navigate
router.replace("/path") // Navigate without history
router.refresh() // Refresh current page
router.back() // Go back
router.forward() // Go forward
```

## 🚨 Common Errors & Fixes

**Error:** Module not found: Can't resolve 'react-router-dom'
**Fix:** Update component to use Next.js navigation

**Error:** Component needs useState
**Fix:** Add `'use client'` at top of file

**Error:** You cannot export metadata from a Client Component
**Fix:** Remove metadata export or move to parent Server Component

**Error:** Cannot read property 'pathname' of undefined
**Fix:** useRouter must be from 'next/navigation' not 'next/router'

## 📚 Path Aliases

```tsx
// tsconfig.json has: "@/*": ["./src/*"]

// Use this:
import MyComponent from "@/components/MyComponent"
import { helper } from "@/lib/utils"

// Instead of:
import MyComponent from "../../../components/MyComponent"
```

## 🔍 Debugging

```tsx
// Check if code runs on server or client
console.log(typeof window === "undefined" ? "SERVER" : "CLIENT")

// Server-only code
if (typeof window === "undefined") {
  // Server logic
}

// Client-only code
if (typeof window !== "undefined") {
  // Client logic
}
```

---

## 🆘 Quick Help

**Dev server not starting?**

- Check you're in the right directory (`cd expresur-ts-client-`)
- Run `npm install` first
- Check for port conflicts (default: 3000)

**Page not found?**

- Verify file is named `page.tsx` (not `Page.tsx`)
- Check file is in correct directory
- Restart dev server

**Styles not loading?**

- Check `globals.css` is imported in root layout
- Verify Tailwind config is correct
- Clear `.next` folder and restart

---

**Keep this reference handy while migrating! 📌**
