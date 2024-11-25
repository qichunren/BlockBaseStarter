# README

This project is a starter kit for Rails 8 + Vite + React + TailwindCSS + shadcn/ui.

In this project, you can design pages using the conventional Rails approach with friendly SSR (server-side rendering), or you can build complex user interfaces using React, driven by react-router-dom for client-side routing.

## Environment

- Ruby 3.3.4
- Rails 8.0 edge
- Node.js 20.x

## Development

```
bin/setup
pnpm run build
bin/rails server
```

## Changelog

- 2024-11-14: v1.0.0
  - Initial release, with Rails 8.0, vite-rails, React, TailwindCSS, and shadcn/ui.

- 2024-11-15: v2.x (main branch)
  - Removed vite-rails
  - Change app/frontend to a single Vite project
  - Rails app is now a main API server