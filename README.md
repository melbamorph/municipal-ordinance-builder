# municipal-ordinance-builder

A static Jekyll site template that municipalities can use to publish zoning ordinances online. The repository contains example articles and configuration files you can adapt for your own city or town.

## Prerequisites

- **Ruby** and **Bundler** installed on your system (see versions in the `Gemfile`).
- Any system libraries required by Jekyll (for example `build-essential` on Debian/Ubuntu).

## Installation

Clone the repository and install dependencies:

```bash
git clone <repo_url>
cd municipal-ordinance-builder
bundle install
```

## Local development

Start a live server to preview the site:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Customization

### Data
Edit `_data/municipality.yml` to set the name of your municipality, base URL, logo path and navigation links.

### Content
Update `index.md` and the Markdown files under `articles/` with your ordinance text. The `example/` folder shows a sample layout you can copy.

### Styling
Modify the templates in `_layouts/` and the stylesheet in `assets/main.css` to adjust the look and feel of the site.

## Deployment (GitHub Pages)

1. Push the repository to GitHub.
2. Enable GitHub Pages in the repository settings.
3. If you serve the site from a subpath, set `baseurl` in `_data/municipality.yml` accordingly.

A GitHub Actions workflow in `.github/workflows` builds the site and deploys it automatically.

## File structure

```
_config.yml              # Jekyll configuration
_data/municipality.yml   # Site-specific settings
_layouts/                # HTML layouts used by pages
articles/                # Markdown files for each ordinance article
assets/                  # Stylesheets and JavaScript
Gemfile                  # Ruby dependencies
```

These sections provide a starting point for creating your own municipal ordinance site.
