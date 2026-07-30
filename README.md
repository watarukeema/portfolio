# Jansen Portfolio

Personal portfolio site for presenting software engineering projects, selected
case studies, skills, and contact details.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 3
- Custom CSS for the main visual system and interactions

## Project Structure

- `src/App.jsx` contains the page state, section layout, navigation state, and
  modal wiring.
- `src/components/PortfolioUi.jsx` contains reusable portfolio UI pieces such
  as project selectors, detail panels, action links, and modals.
- `src/data/portfolio.js` contains editable portfolio content for projects,
  skills, links, and current signals.
- `public/` contains static assets including the resume PDF, profile photo, and
  project screenshots.

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Notes

Most portfolio content should be edited in `src/data/portfolio.js` rather than
directly inside React components. Keep images in `public/` when they are meant
to be referenced by absolute paths such as `/profile1.jpg`.
