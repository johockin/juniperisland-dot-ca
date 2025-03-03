# Juniper Island Website

A modern, responsive website for Juniper Island, Toronto's premier video production company.

## Features

- Modern, responsive design
- Smooth page transitions
- Video portfolio showcase
- Newsletter subscription
- Blog section (coming soon)
- Contact form
- Mobile-friendly navigation

## Tech Stack

- Vue.js 3
- Vue Router
- Vite
- SCSS
- GSAP (for animations)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/juniper-island.git
cd juniper-island
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

This project is configured for deployment on Netlify. To deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Project Structure

```
juniper-island/
├── src/
│   ├── assets/        # Images, videos, and other static assets
│   ├── components/    # Reusable Vue components
│   ├── views/         # Page components
│   ├── router/        # Vue Router configuration
│   ├── styles/        # Global styles and SCSS variables
│   ├── App.vue        # Root component
│   └── main.js        # Application entry point
├── public/            # Static files
├── index.html         # HTML template
├── package.json       # Project dependencies
├── vite.config.js     # Vite configuration
└── netlify.toml       # Netlify configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 