# Router-Work

A simple React router demo built with Vite.

## Project Overview

This project includes:

- `App.jsx` with a `BrowserRouter` wrapper
- `Navbar.jsx` using React Router `Link` components
- `MainRoute.jsx` with `Routes`, `Route`, and a redirect from `/` to `/home`
- Page components in `src/Component/Pages`:
  - `Home.jsx`
  - `About.jsx`
  - `Project.jsx`
  - `Contact.jsx`
  - `Services.jsx`
- Custom styling in `src/index.css`

## Available Scripts

In the project directory, you can run:

### `npm install`

Install project dependencies.

### `npm run dev`

Start the Vite development server and open the app in your browser.

### `npm run build`

Build the app for production into the `dist` folder.

### `npm run preview`

Preview the production build locally.

## Notes

- The app is designed to use React Router for client-side navigation.
- The navbar is implemented using `Link` components rather than anchor tags.
- Styles are managed with a single global CSS file for a clean, modern layout.

## License

This project is provided for learning and experimentation.
