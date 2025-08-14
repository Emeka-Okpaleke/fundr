# Fundr Dashboard

A modern, responsive financial dashboard application built with Next.js and TypeScript.

## Overview

Fundr Dashboard is a comprehensive financial management platform that provides users with an intuitive interface to track transactions, monitor account balances, and analyze financial data. The dashboard features a clean, modern UI with responsive design for seamless use across desktop and mobile devices.

## Features

- **Responsive Design**: Fully optimized for both desktop and mobile devices
- **Dashboard Analytics**: Visual representation of revenue data with interactive charts
- **Transaction Management**: Detailed transaction history with filtering capabilities
- **Account Management**: Easy access to account details and balances
- **Dark/Light Mode**: Theme support for user preference

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Testing**: Jest and React Testing Library
- **API Mocking**: Mock Service Worker (MSW)

## Project Structure

```
fundr-dashboard/
├── app/                  # Next.js app directory structure
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Dashboard page
│   └── transactions/     # Transactions page
├── components/           # Reusable UI components
│   ├── header.tsx        # Application header with responsive navigation
│   ├── sidebar.tsx       # Desktop navigation sidebar
│   └── ui/               # UI component library
├── lib/                  # Utility functions and business logic
│   └── redux/            # Redux state management
│       ├── provider.tsx  # Redux provider
│       ├── slices/       # Redux slices for data management
│       └── api.ts        # API service
├── public/               # Static assets
│   └── fundr-logo.svg    # Application logo
└── __tests__/            # Test files
    └── components/       # Component tests
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/fundr-dashboard.git
cd fundr-dashboard
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Testing

Run tests with Jest and React Testing Library:

```bash
npm test
# or
pnpm test
```

## Building for Production

```bash
npm run build
# or
pnpm build
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration for deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS/Android)

## License

MIT
