# Elivra Landing Page

A modern, responsive, and feature-rich landing page for **Elivra**, an AI-powered companion service designed to provide security and companionship for elderly individuals and their families.

---

### ➤ [Live Demo (Placeholder)](https://your-live-demo-url.com)

![Elivra Landing Page Screenshot](https://git.elivra.se/ChieShikanaiEklund/Elivra-publik/raw/branch/main/public/assets/screenshot.png)  
*(Note: Please replace this with an actual screenshot of the project)*

## About The Project

This project is a complete implementation of the Elivra landing page, built with a modern frontend stack. It showcases the service's core features, pricing plans, and value proposition in a clean, elegant, and user-friendly interface. The primary goal is to convert visitors into customers by clearly communicating the benefits of Elivra and providing clear calls-to-action.

The application is structured with a component-based architecture, making it easy to maintain, scale, and develop new features.

## Key Features

- **Component-Based Architecture**: Built with React, the UI is divided into reusable and maintainable components.
- **Fully Responsive Design**: Adapts seamlessly to all screen sizes, from mobile phones to desktops, using Tailwind CSS.
- **Modern Tech Stack**: Leverages Vite for a blazing-fast development experience, TypeScript for type safety, and `shadcn/ui` for a beautiful and accessible component library.
- **Interactive UI Elements**: Engaging user experience with smooth scrolling, hover effects, and toast notifications.
- **Structured Content Sections**: The landing page is organized into logical sections to guide the user:
  - **Hero**: A compelling introduction with a background image and primary calls-to-action.
  - **What is Elivra?**: An explanation of the core service.
  - **Min Livsbok**: Details about the unique "My Life Book" feature.
  - **Pricing**: A clear, three-tiered pricing structure with a comparison table.
  - **FAQ**: Answers to common user questions.
  - **Testimonials**: Social proof through customer reviews.
  - **Footer & Final CTA**: Contact information and a final call-to-action.

## Technology Stack

This project is built with a curated set of modern web technologies:

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Routing**: [Wouter](https://github.com/molefrog/wouter)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v18 or newer)
- [pnpm](https://pnpm.io/installation)

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://git.elivra.se/ChieShikanaiEklund/Elivra-publik.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Elivra-publik
    ```

3.  **Install dependencies:**

    ```bash
    pnpm install
    ```

### Running the Application

To start the development server, run the following command:

```bash
pnpm dev
```

This will start the development server, typically at `http://localhost:5173`. Open this URL in your browser to see the application.

## Available Scripts

In the project directory, you can run:

- `pnpm dev`: Runs the app in development mode.
- `pnpm build`: Builds the app for production to the `dist` folder.
- `pnpm preview`: Serves the production build locally for previewing.
- `pnpm check`: Runs the TypeScript compiler to check for type errors.
- `pnpm format`: Formats all files using Prettier.

## Project Structure

The project follows a standard Vite + React structure:

```
Elivra-publik/
├── public/             # Static assets that are served as-is
├── src/
│   ├── components/     # Reusable UI components
│   │   └── ui/         # shadcn/ui components
│   ├── contexts/       # React contexts (e.g., ThemeContext)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page-level components
│   ├── App.tsx         # Main application component with routing
│   ├── main.tsx        # Entry point of the application
│   └── index.css       # Global styles and Tailwind directives
├── package.json
├── vite.config.ts      # Vite configuration
└── README.md
```

## Deployment

This is a static web application that can be deployed to any static site hosting service.

1.  Run the build command:

    ```bash
    pnpm build
    ```



## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` file for more information.

## Contact

Chie Shikanai Eklund - chie.shikanai.eklund@elivra.se

Project Link: [https://git.elivra.se/ChieShikanaiEklund/Elivra-publik](https://git.elivra.se/ChieShikanaiEklund/Elivra-publik)