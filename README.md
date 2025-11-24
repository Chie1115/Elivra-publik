# Elivra - Landing Page

A complete, responsive landing page for Elivra, an AI-powered companion service designed to provide security and companionship for elderly individuals and their families.

## Overview

This landing page showcases Elivra's services, features, and pricing plans. The design is fully responsive and optimized for desktop, tablet, and mobile devices, faithfully implementing the Figma design specifications.

## Features

### Complete Sections

The landing page includes all essential sections for a comprehensive user experience:

**Hero Section** - Eye-catching introduction with background imagery and dual call-to-action buttons for purchasing gift cards and starting a free trial.

**What is Elivra?** - Two-column layout explaining Elivra's core value proposition as a daily companion for elderly individuals who live alone or need extra support.

**About Min Livsbok** - Detailed description of the life story feature, including voice recording, photo sharing, AI-powered timeline organization, and secure family sharing capabilities.

**Min Livsbok Details** - Extended explanation of how the unique life story feature preserves memories for future generations.

**How is it Created?** - Step-by-step guide explaining the simple process of creating a life story through conversations with Elivra.

**Pricing Plans** - Three-tier pricing structure (Bas, Familj, Premium) with clear feature lists and pricing at 99 kr/month, 149 kr/month, and 199 kr/month respectively.

**Feature Comparison Table** - Comprehensive table comparing all features across the three pricing tiers, making it easy for users to choose the right plan.

**FAQ Section** - Frequently asked questions addressing common concerns about smartphone requirements, multiple family members, and pricing structure.

**Testimonials** - Customer reviews from Anna S., Erik L., and Margareta K., showcasing real experiences with Elivra's services.

**Final CTA** - Compelling call-to-action encouraging users to try the service or purchase a gift card.

**Footer** - Contact information including address (Hantverkaregatan 29/33, Linköping, Sweden), phone number, and email.

### Design System

The landing page implements a carefully crafted color palette based on the Figma design:

- **Primary Blue (#3490AE)**: Used for logo, headings, primary buttons, and table headers
- **Gray (#737373)**: Applied to body text for optimal readability
- **Cream (#FAF7F2)**: Alternating section backgrounds for visual rhythm
- **Peach (#FFB088)**: Accent color for emphasis
- **Coral (#FF8A80)**: Secondary buttons and featured pricing card
- **Light Pink (#FFF5F3)**: Testimonials section background

### Responsive Design

The landing page adapts seamlessly across all device sizes with three main breakpoints:

**Desktop (1024px+)**: Full two-column layouts, large typography, and optimal spacing for wide screens.

**Tablet (768px - 1024px)**: Adjusted spacing and slightly reduced font sizes while maintaining two-column layouts where appropriate.

**Mobile (<768px)**: Single-column layouts, hamburger menu navigation, optimized button sizes for touch interaction, and stacked content for easy scrolling.

### Interactive Elements

The page includes several interactive features to enhance user engagement:

- Sticky header navigation that remains accessible while scrolling
- Mobile hamburger menu with smooth transitions
- Hover effects on buttons with subtle elevation and shadow changes
- Smooth scroll behavior for anchor links
- Interactive pricing cards with hover states

## Technology Stack

The landing page is built with modern web technologies:

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Advanced styling with custom properties (CSS variables), Flexbox, and Grid
- **TypeScript**: Type-safe JavaScript for mobile menu interactions
- **Responsive Images**: Optimized image loading for all device sizes

## File Structure

```
Elivra-publik/
├── index.html              # Main HTML file with all sections
├── style.css               # Complete stylesheet with responsive design
├── src/
│   └── main.ts            # TypeScript source for interactions
├── dist/
│   └── main.js            # Compiled JavaScript
├── assets/
│   ├── samla_slakten.jpg           # Hero background image
│   ├── testimonial_1.jpg           # Testimonial hero image
│   ├── testimonial_2.jpg           # "What is Elivra?" section image
│   ├── testimonial_3.jpg           # "About Min Livsbok" section image
│   ├── tidskapsel.jpg              # Feature card image
│   ├── aldrig_ensam.jpg            # Feature card image
│   ├── trygghet_i_vardagen.jpg     # Feature card image
│   ├── anhorig_appen.jpg           # Feature card image
│   └── ge_bort_en_kamrat.jpg       # Feature card image
└── README.md              # This file
```

## Setup and Development

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js and npm (for TypeScript compilation)
- Git for version control

### Local Development

To run the landing page locally:

1. Clone the repository:
```bash
git clone https://github.com/Chie1115/Elivra-publik.git
cd Elivra-publik
```

2. Start a local web server:
```bash
python3 -m http.server 8000
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

### TypeScript Compilation

If you make changes to the TypeScript file:

1. Install TypeScript globally:
```bash
npm install -g typescript
```

2. Compile the TypeScript file:
```bash
tsc src/main.ts --outDir dist
```

## Deployment

The landing page is a static site and can be deployed to any web hosting service:

### GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Select main branch as source
4. Your site will be published at `https://chie1115.github.io/Elivra-publik/`

### Other Hosting Options

- **Netlify**: Drag and drop the entire folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload files to an S3 bucket with static website hosting enabled
- **Traditional Web Hosting**: Upload files via FTP to your web server

## Browser Support

The landing page is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

The landing page is optimized for fast loading:

- Minimal external dependencies
- Optimized images with appropriate formats
- Efficient CSS with no redundant rules
- Compressed JavaScript output
- Semantic HTML for better rendering

## Accessibility

The landing page follows web accessibility best practices:

- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images
- Sufficient color contrast ratios
- Keyboard navigation support
- ARIA labels for interactive elements

## Customization

### Updating Colors

Colors are defined as CSS custom properties in `style.css`:

```css
:root {
    --primary-blue: #3490AE;
    --gray: #737373;
    --cream: #FAF7F2;
    --peach: #FFB088;
    --coral: #FF8A80;
    --light-pink: #FFF5F3;
}
```

### Updating Content

All content is in Swedish and can be edited directly in `index.html`. The structure is clearly organized with HTML comments marking each section.

### Adding New Sections

To add a new section:

1. Add the HTML markup in `index.html`
2. Add corresponding styles in `style.css`
3. Update navigation links if needed
4. Test responsive behavior on all device sizes

## Credits

### Images

All images are from Pexels and are free to use:

- pexels-cottonbro-8847307.jpg
- pexels-cottonbro-7232037.jpg
- pexels-marcus-aurelius-6787970.jpg
- pexels-marcus-aurelius-6787953.jpg

### Design

The design is based on Figma specifications provided by the Elivra team, faithfully implementing the color palette, layout, typography, and spacing.

## License

© 2025 Elivra. All rights reserved.

## Contact

For questions or support regarding this landing page:

- **Address**: Hantverkaregatan 29/33, Linköping, Sweden
- **Phone**: 070-0000000
- **Email**: info@

## Changelog

### Version 1.0.0 (2025-11-24)

- Initial release with complete landing page implementation
- All sections from Figma design implemented
- Full responsive design for mobile, tablet, and desktop
- Interactive elements and animations
- Pricing tables and feature comparison
- FAQ section
- Customer testimonials
- Complete footer with contact information

---

Built with ❤️ for Elivra
