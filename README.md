# Jocar Polimentos

A modern, responsive website for an automotive detailing business, built with Next.js, TypeScript and Tailwind CSS.

The project focuses on a clean visual presentation, reusable UI components, responsive layouts and a conversion-oriented structure for a local service business.

## Highlights

- Responsive institutional website
- Component-based architecture with Next.js
- Reusable React components
- Tailwind CSS styling
- TypeScript throughout the application
- Structured content and reusable project constants
- Cookie consent management
- Google Analytics integration through environment configuration
- SEO-friendly page structure
- Optimized static assets and responsive imagery

## Tech Stack

- **Next.js** — React framework and application architecture
- **React** — Component-based UI development
- **TypeScript** — Type-safe application code
- **Tailwind CSS** — Utility-first styling
- **Silktide Cookie Consent** — Cookie preference management
- **Google Analytics** — Optional analytics integration

## Project Structure

```text
src/
├── app/
│   ├── _components/     # Page-specific components
│   ├── components/      # Application components
│   ├── layout.tsx
│   └── page.tsx
├── components/          # Reusable UI components
├── constants/           # Shared project constants
├── data/                # Structured content
└── lib/                 # Utility functions

public/                  # Static assets
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/felipeseabra/jocarpolimentos.com.br.git
cd jocarpolimentos.com.br
npm install
```

### Environment Variables

If analytics are enabled, configure the required environment variable locally:

```env
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

Never commit real environment variables or credentials to the repository.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

The application uses the Next.js App Router and separates page-specific components, reusable UI components, structured content and utility logic.

The project follows a component-driven approach designed to keep the interface maintainable while supporting responsive layouts and consistent visual patterns.

## Privacy & Analytics

The project includes cookie consent management and optional analytics integration. Analytics identifiers are provided through environment variables rather than being hardcoded in the source code.

## Project Scope

Jocar Polimentos is an example of a commercial website built for a local automotive detailing business. The implementation emphasizes responsive frontend development, reusable components, visual consistency and a clear service-oriented user experience.

## License

This project is licensed under the MIT License.
