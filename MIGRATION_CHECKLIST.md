# Next.js Migration Checklist

## ✅ Phase 1: Setup (COMPLETED)

- [x] Install Next.js and dependencies
- [x] Update package.json
- [x] Create Next.js config files
- [x] Update tsconfig.json
- [x] Create app directory structure
- [x] Migrate Navbar component
- [x] Create root layout with providers
- [x] Create home page

## 🔄 Phase 2: Route Migration (IN PROGRESS)

### Public Routes (in `src/app/(main)/`)

- [ ] `/quiénes-somos` - About page
- [ ] `/CasilleroVirtual` - Virtual locker
- [ ] `/rasterear` - Track shipment
- [ ] `/faqpage` - FAQ page
- [ ] `/contacto` - Contact page
- [ ] `/login` - Login page
- [ ] `/register` - Register page
- [ ] `/recogida` - Pickup page
- [ ] `/nuestros` - Our services
- [ ] `/casilleroescritorio` - Locker desktop

### Dashboard Routes (in `src/app/dashboard/`)

First create: `src/app/dashboard/layout.tsx`

#### User Dashboard

- [ ] `/dashboard/user-dashboard` - User dashboard home
- [ ] `/dashboard/locker` - User locker
- [ ] `/dashboard/packages` - User packages
- [ ] `/dashboard/consolidate` - Consolidate packages
- [ ] `/dashboard/shipments` - User shipments
- [ ] `/dashboard/create-shipment` - Create shipment
- [ ] `/dashboard/cuba-shipping` - Cuba shipping
- [ ] `/dashboard/pickup` - Pickup requests
- [ ] `/dashboard/payments` - Payment history
- [ ] `/dashboard/remittances` - Remittances
- [ ] `/dashboard/notifications` - Notifications
- [ ] `/dashboard/profile` - User profile

#### Admin Dashboard

- [ ] `/dashboard/admin` - Admin home
- [ ] `/dashboard/admin-users` - User management
- [ ] `/dashboard/admin-wallet` - Wallet management
- [ ] `/dashboard/audit-logs` - Audit logs
- [ ] `/dashboard/api-integrations` - API integrations
- [ ] `/dashboard/admin-rates` - Rate management
- [ ] `/dashboard/admin-settings` - Settings
- [ ] `/dashboard/admin-consolidations` - Consolidations
- [ ] `/dashboard/admin-packages` - Package management
- [ ] `/dashboard/admin-payments` - Payment management
- [ ] `/dashboard/admin-pickup` - Pickup management
- [ ] `/dashboard/admin-reports` - Reports
- [ ] `/dashboard/admin-notifications` - Notifications
- [ ] `/dashboard/admin-shipments` - Shipment management
- [ ] `/dashboard/admin-tracking` - Tracking
- [ ] `/dashboard/admin-locker` - Locker management
- [ ] `/dashboard/logistic-group` - Logistics group
- [ ] `/dashboard/qr-scanning` - QR scanning
- [ ] `/dashboard/internal-users` - Internal user roles

### Warehouse Routes (in `src/app/warehouse/`)

First create: `src/app/warehouse/layout.tsx`

- [ ] `/warehouse` - Warehouse home (redirect to intake)
- [ ] `/warehouse/intake` - Package intake
- [ ] `/warehouse/ScanningCenter` - Scanning center
- [ ] `/warehouse/inwarehousepackages` - In warehouse
- [ ] `/warehouse/pendingreview` - Pending review
- [ ] `/warehouse/readyforconsolidation` - Ready for consolidation
- [ ] `/warehouse/readyforshipment` - Ready for shipment

## 🔄 Phase 3: Component Updates

### Components using react-router-dom

Run: `grep -r "react-router-dom" src/` to find all files

Common components to update:

- [ ] Dashboard component
- [ ] Warehouse component
- [ ] Login form
- [ ] Register form
- [ ] Any component with navigation links

### Changes needed in each:

```tsx
// Before
import { Link, useNavigate, useLocation } from 'react-router-dom';
<Link to="/path">
navigate('/path');
location.pathname;

// After
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
<Link href="/path">
router.push('/path');
pathname;
```

## 🎨 Phase 4: Assets & Styling

- [ ] Move images from `src/assets` to `public/assets`
- [ ] Update image imports to use `/assets/...`
- [ ] Consider using Next.js Image component
- [ ] Verify Tailwind CSS is working
- [ ] Check all custom CSS imports

## 🔐 Phase 5: Authentication & State

- [ ] Verify AuthContext works in Next.js
- [ ] Test login/logout functionality
- [ ] Check protected routes work
- [ ] Verify user persistence

## 🌐 Phase 6: Data & API

- [ ] Create environment variables (`.env.local`)
- [ ] Update API endpoints
- [ ] Consider using Next.js API routes
- [ ] Test data fetching in components

## 📱 Phase 7: Features & Functionality

- [ ] Test form submissions
- [ ] Verify file uploads work
- [ ] Check payment integrations
- [ ] Test QR code functionality
- [ ] Verify internationalization (i18n)
- [ ] Test notifications/toasts

## 🧪 Phase 8: Testing

- [ ] Test all public pages
- [ ] Test user dashboard features
- [ ] Test admin dashboard features
- [ ] Test warehouse operations
- [ ] Test on different browsers
- [ ] Test responsive design
- [ ] Test with different user roles

## 🚀 Phase 9: Optimization

- [ ] Convert suitable components to Server Components
- [ ] Optimize images with Next.js Image
- [ ] Add proper metadata to pages
- [ ] Implement error boundaries
- [ ] Add loading states
- [ ] Optimize bundle size

## 📦 Phase 10: Deployment

- [ ] Create production build (`npm run build`)
- [ ] Fix any build errors
- [ ] Test production build locally
- [ ] Configure deployment platform
- [ ] Set environment variables
- [ ] Deploy to production
- [ ] Test production deployment

## 📊 Progress Tracker

**Total Tasks:** ~70+
**Completed:** 8 (Setup)
**Remaining:** ~62

**Current Phase:** Phase 2 (Route Migration)

---

## 💡 Tips

1. **Work incrementally** - Complete one phase before moving to next
2. **Test frequently** - Run `npm run dev` and test after changes
3. **Use the helper script** - `node scripts/create-route.js <route-name>`
4. **Check console** - Browser console shows helpful errors
5. **Start with simple pages** - Build confidence with easy routes first

## 🆘 Need Help?

- Check [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) for detailed instructions
- See [START_HERE.md](./START_HERE.md) for quick reference
- Review [Next.js Docs](https://nextjs.org/docs) for official guidance

---

**Update this checklist as you progress!** ✅
