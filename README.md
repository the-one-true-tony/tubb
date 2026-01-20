# Tubulinopathy Awareness Website

An educational website providing comprehensive information about tubulinopathies - rare genetic disorders affecting microtubule formation and brain development.

## Features

- **Comprehensive Information**: Covers causes, variants, symptoms, diagnosis, and current research
- **Interactive Statistics**: Visual charts showing frequency of expressions and severity distribution
- **Research Timeline**: Roadmap showing the evolution of screening and diagnosis methods
- **Support Resources**: Links to support groups, biobanks, and helpful organizations
- **Responsive Design**: Fully optimized for mobile and desktop devices

## Sections

- **Hero**: Introduction to tubulinopathies
- **Causes & Inheritance**: Explains what causes tubulinopathies and inheritance patterns
- **Genetic Variants**: Overview of common and rare variants (TUBA1A, TUBB2B, TUBB3, etc.)
- **Expressions**: How tubulinopathies manifest (symptoms)
- **Diagnosis**: Clinical evaluation, imaging, genetic testing, and screening evolution
- **Statistics**: Data visualization of expression frequencies
- **Support & Resources**: Treatment options, support groups, and resources
- **Current Research**: Ongoing research directions with links to studies
- **Contact**: Get in touch for feedback or corrections
- **Sources**: Comprehensive list of research sources and references

## Technology Stack

- **Next.js** - Full-stack React framework with API routes
- **React** - UI framework
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## API Routes

This project includes Next.js API routes for backend functionality:

- `/api/hello` - Test endpoint
- `/api/contact` - Contact form submission handler
- `/api/statistics` - Statistical data endpoint
- `/api/variants` - Variant data endpoint (supports optional `?gene=` query parameter)

See [README_API.md](./README_API.md) for detailed API documentation.

## Contributing

Have something to add or notice information that needs correction? Please contact us at tubulinopathy@gmail.com

## License

This project is for educational and awareness purposes.

## Disclaimer

This website is for informational purposes only and does not constitute medical advice. Always consult with qualified healthcare professionals for medical guidance.
