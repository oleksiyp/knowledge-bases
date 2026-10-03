# OKF Viewer

A fast, readable viewer for [Open Knowledge Format (OKF)](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)
knowledge bundles, together with the knowledge bases it publishes.

**Live: https://okf.zengarden.space**

Every page has its own URL, with link previews for Slack, Telegram, X and other apps, so any
concept, folder or filtered view can be shared.

## Knowledge bases

| Name | Title | Folder |
|---|---|---|
| `oss-kb` | Open Source Successes & Failures (Oct 2024 – Oct 2026) | [`kb/oss-kb`](kb/oss-kb) |
| `grants-kb` | Grants for Software: programs, funders and deadlines (Oct 2026) | [`kb/grants-kb`](kb/grants-kb) |
| `horizon-ois-kb` | Horizon Europe: Open Internet Stack (Cluster 4) topics, projects, cascade funds, rules | [`kb/horizon-ois-kb`](kb/horizon-ois-kb) |
| `db-ideas-kb` | Database Ideas 2018–2026: what won, what failed and why (incl. Kafka/streaming) | [`kb/db-ideas-kb`](kb/db-ideas-kb) |

### Adding a knowledge base

1. Put the bundle (a directory of OKF markdown files) under `kb/<name>/`.
2. Register it in [`knowledge-bases.json`](knowledge-bases.json) with a short `title`, which the
   top-bar dropdown shows, and a one-sentence `description`.
3. Push to `main`. GitHub Actions builds the static site and deploys it to Cloudflare Pages.

```json
{ "name": "my-kb", "path": "kb/my-kb", "title": "Short title", "description": "One sentence." }
```

## How it is built

- **Static site.** `npm run build:static` renders every knowledge base at build time into
  `dist/web`:
  - JSON payloads for the manifest, every concept, previews, folders, the graph and health.
  - A serialized search index; search runs entirely in the browser.
  - The raw markdown files.
  - One HTML entry per page, with `<title>` and Open Graph tags.
- **Hosting.** Cloudflare Pages serves the result. There is no server, nothing to keep running,
  and the site is public.
- **Local editing.** `npm run dev` runs a small API server with live reload: edit markdown and
  open pages refresh in place.

## What the viewer is designed for

Agent-maintained knowledge bases are large, heavily cross-linked and carry provenance metadata
that matters. The UI is built around four jobs.

### 1. Find anything in seconds
- **Command palette** (`⌘K` or `/`): instant title matches plus full-text hits with
  highlighted snippets.
- **Filters** in the query: `type:event`, `#tag`, `in:folder`.
- **Commands**: start the query with `>`.

### 2. Read in context without losing your place
- **Concept links** show a Wikipedia-style preview on hover.
- **Footnotes keyed to `sources[].id`** (spec §5.1) open a source card with title, domain,
  author and dates. Uncited sources are flagged.
- **Backlinks** show the sentence that links to the page, including references made through
  frontmatter.
- **Navigation**: an outline with scroll spy, `[` / `]` to move through a folder, sortable
  tables, deep links to headings, and Share (the native share sheet on phones, copy-link
  elsewhere).

### 3. Know how far to trust what you read
- **Trust tier**, derived from `verified` (spec §5.3).
- **Freshness** from `stale_after` (§5.5), and banners for `draft` and `deprecated` (§5.4).
- **Provenance panel**: generator, verifiers and source domains.
- **Health view**: OKF v0.2 conformance (§11), broken links, orphans and stale concepts.

### 4. See the shape of the corpus
- **Explore** turns the frontmatter into facets automatically. Every facet shows live counts,
  values are coloured by sentiment, and the filter state lives in the URL.
- **Timeline** shows dated concepts with a monthly histogram, coloured by any facet.
- **Graph** shows body links plus frontmatter references, with focus mode and a mini local
  graph on every page.

It works on phones: the sidebar becomes a drawer, the context panel moves under the article,
and search goes full-screen.

## Keyboard

| Keys | Action |
|---|---|
| `⌘K` / `/` | Search & commands |
| `g h` `g e` `g t` `g g` `g x` | Home, Explore, Timeline, Graph, Health |
| `[` `]` | Previous / next concept in folder |
| `.` | Toggle context panel |
| `\` | Toggle sidebar |
| `?` | Shortcuts |

## Development

```bash
npm install
npm run dev                         # API + live reload on :4747, Vite HMR on :5173
npm run build:static                # static site into dist/web
npm run preview:static              # serve dist/web the way Cloudflare Pages does, on :4848
npm run typecheck
```

Requires Node ≥ 22.18. The server and build scripts run TypeScript directly with Node's type
stripping. To view ad-hoc bundles locally: `node server/index.ts --bundle name=/path/to/bundle`.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push to `main`. It
typechecks, builds the static site, validates the knowledge bases against OKF v0.2, and runs
`wrangler pages deploy`.

Repository secrets:

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | API token with **Account → Cloudflare Pages → Edit** |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |

Optional repository variables:
- `SITE_URL`, default `https://okf.zengarden.space`.
- `PAGES_PROJECT`, default `okf-viewer`.
- `CUSTOM_DOMAIN`, default `okf.zengarden.space`.

The first run creates the Pages project and attaches the custom domain. In the zone, point
the domain at the project with a CNAME to `<project>.pages.dev`.

## License

MIT for the viewer code. The knowledge bases under `kb/` are agent-generated research. Check
each concept's `sources` for the underlying material.
