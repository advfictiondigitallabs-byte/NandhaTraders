# Nandha Traders — Wholesale Rice & Urad Dal Suppliers

Official website and digital presence for **Nandha Traders**, trusted wholesale suppliers of premium rice and urad dal based in Perambalur, Tamil Nadu.

- **Production URL**: [https://www.nandhatraders.com](https://www.nandhatraders.com)
- **Vercel Deployment**: [https://nandha-traders.vercel.app](https://nandha-traders.vercel.app)
- **Repository**: [https://github.com/advfictiondigitallabs-byte/NandhaTraders.git](https://github.com/advfictiondigitallabs-byte/NandhaTraders.git)

---

## Architecture & Deployment

### Canonical Deploy Directory: `standalone-site`

The production website is a lightweight, high-performance static deliverable located in the `standalone-site/` folder:
- **Root Document**: `standalone-site/index.html` serves as the entry point at domain root (`/`).
- **Relative Assets**: All images (`hero.jpg`, `rice.jpg`, `urad-collection.png`, `warehouse.jpg`, `logo-vel.png`) and self-hosted typography (`fonts/fonts.css`, `fonts/*.woff2`) use strictly relative URLs.
- **Zero Backend / No Database**: Enquiry generation operates entirely client-side via WhatsApp deep links (`https://wa.me/919344830263?text=...`) using `encodeURIComponent`. No visitor data is collected or stored.

### Static Vercel Configuration

The website is configured for immediate, zero-build static hosting via `standalone-site/vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "",
  "installCommand": "",
  "outputDirectory": "."
}
```

When importing this repository into Vercel:
1. Set the **Root Directory** to `standalone-site`.
2. Keep the Framework Preset as **Other** (Pure Static).
3. Build Command and Install Command should remain empty.
4. Output Directory is `.` (current directory).

---

## Git Workflow

1. **Main Branch**: All production deployments are sourced from `main`.
2. **Automated Deployments**: Once the repository is connected to Vercel, any push to `main` will automatically trigger a production deployment.
3. **Synchronization**: Keep `standalone-site/` and `public/site/` in sync for all static HTML and asset modifications.

---

## Local Development & Testing Wrapper

A local TanStack Start / Vite wrapper is provided for local preview and automated routing tests:

```bash
# Install dependencies
npm install

# Run routing tests
npm test

# Type checking
npx tsc --noEmit

# Production build test
npm run build

# Start local development server
npm run dev
```

When running `npm run dev`, the server listens at `http://127.0.0.1:8080/` and automatically redirects root requests (`/`) to `/site/index.html` (HTTP 200).

---

## Security & Credentials

- **No Credentials**: This project requires no environment variables, API tokens, database credentials, or secret keys.
- **Strict Ignore Rules**: `.gitignore` ensures private CLI settings (`.vercel-account/`), deployment metadata (`.vercel/`), local environment files (`.env*`), backup archives, and internal brief files are never committed to version control.
