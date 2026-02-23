// Helper script to generate Next.js page templates
// Run with: node scripts/create-route.js <route-name>

const fs = require("fs")
const path = require("path")

const routeName = process.argv[2]

if (!routeName) {
  console.error("Usage: node scripts/create-route.js <route-name>")
  console.error("Example: node scripts/create-route.js contacto")
  process.exit(1)
}

const routePath = path.join(__dirname, "..", "src", "app", "(main)", routeName)
const pageFile = path.join(routePath, "page.tsx")

// Create directory if it doesn't exist
if (!fs.existsSync(routePath)) {
  fs.mkdirSync(routePath, { recursive: true })
}

// Page template
const template = `'use client';

// TODO: Import your component
// import YourComponent from '@/pages/...';

export default function ${capitalize(routeName)}Page() {
  return (
    <div>
      <h1>${capitalize(routeName)} Page</h1>
      {/* TODO: Add your component here */}
    </div>
  );
}
`

// Write the file
fs.writeFileSync(pageFile, template)

console.log(`✅ Created: ${pageFile}`)
console.log(`📝 Next: Import your component and replace the placeholder`)

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
