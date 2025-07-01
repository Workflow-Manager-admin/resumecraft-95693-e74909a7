# Resume Builder App

A user-friendly, modern Resume Builder application built with Next.js. The app allows users to seamlessly input their personal information, work experience, education, skills, and projects via a guided multi-step form. As users enter data, a real-time preview of the resume (with selectable templates) is displayed, providing immediate feedback and a visually engaging experience.

## Project Overview

The Resume Builder App is designed for simplicity and efficiency, enabling anyone to quickly build a professional resume with minimal effort. The interface features a split-screen layout—with all input steps on the left and a real-time preview (with template selection controls) on the right—ensuring that the final result matches user expectations. The design is fully responsive, adapting to all device sizes from desktop to mobile.

## Key Features

- **Multi-Step Resume Form:** Guided entry for personal info, work experience, education, skills, and projects.
- **Real-time Resume Preview:** Instantly see your resume as you fill out your details.
- **Template Selection:** Choose from 2–3 visually distinct, professional templates directly above the preview.
- **Responsive Design:** The layout adapts smoothly to desktops, tablets, and phones.
- **Print/Download Support:** Download or print your finished resume (future roadmap).
- **Minimal & Modern UI:** Clean aesthetic, elegant typography, and minimal distractions.

## Architecture

For a detailed explanation, component responsibilities, and a diagram, see [kavia-docs/architecture.md](./kavia-docs/architecture.md).

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (React-based, client-server SSR/SSG/ISR ready)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with CSS Variables for theme colors and font configuration
- **Languages:** TypeScript, JavaScript, CSS (via Tailwind)
- **Font:** [Geist](https://vercel.com/font/geist), modern sans/mono pairing

## Setup & Installation Instructions

1. **Clone the repo:**
   ```bash
   git clone <your-repo-url>
   cd resumecraft-95693-e74909a7/resume_frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage Guide

1. **Start the app** in development mode using the instructions above.
2. **Fill out the multi-step form** with your personal details, work experience, education, skills, and project information.
3. **Select a template** above the preview panel to see how your resume will appear in different styles.
4. **Preview** the generated resume in real time as you enter data.
5. **Download or print** the completed resume (feature coming soon).

> **Note:** At this stage, major UI scaffolding and basic styles are implemented. Feature-rich components (such as full form logic and live preview) are in the roadmap.

## Contributing

Contributions are welcome! For bug reports, feature requests, or code contributions, please open an issue or submit a pull request.

1. Fork this repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](../LICENSE).

## Contact & Support

For questions, issues or support, please open an issue on the repository or reach out via the project homepage.

---

<div align="center">
Craft a professional resume in minutes.  
Built with ❤️ using Next.js + Tailwind CSS.
</div>
