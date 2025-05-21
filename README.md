# municipal-ordinance-builder
Beta build of a static interface for municipalities to host their zoning ordinance.
It is powered by [Jekyll](https://jekyllrb.com/) and renders pages from simple
Markdown files. The project aims to make it easy for local governments to
publish ordinances online without needing a complex CMS.

## Getting started

### Install dependencies
Install Ruby gems with Bundler:

```bash
bundle install
```

### Run the local server
Start a live Jekyll server for development:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

### Customize your municipality
Edit `_data/municipality.yml` to configure your site's settings (name, base URL,
logo path and navigation links). Replace the placeholder values with details for
your municipality.

All ordinance text lives in the `articles/` directory. Each Markdown file in
this folder becomes a page of your ordinance. Modify the provided articles or
create new ones to match your local regulations. Update `index.md` to adjust the
Table of Contents links.

### Project structure

```
├── _data/           # Configuration files
├── _layouts/        # Layout templates
├── articles/        # Ordinance articles in Markdown
├── assets/          # Images and other static files
├── example/         # Sample content and organization
└── index.md         # Home page / Table of Contents
```

The `example/` directory shows a fully populated ordinance and can be used as a
reference or starting point for your own content.

### Deployment

The repository includes GitHub Actions workflows (`jekyll.yml` and
`jekyll-gh-pages.yml`) that automatically build the site with Jekyll and deploy
it to GitHub Pages whenever changes are pushed to the `main` branch.
