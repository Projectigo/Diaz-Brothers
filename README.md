# Diaz Brothers — Higher Privacy / Unlisted Build

This build is designed to be **unlisted**, not authenticated.

## Direct URLs
- Randy: `https://projectigo.github.io/Diaz-Brothers/connect/km0NDYd5P2N84CMvh2M/randy/?src=nypl26`
- Ryan: `https://projectigo.github.io/Diaz-Brothers/connect/moPcPXZBqlRRxAlii8A/ryan/?src=nypl26`

The root site does not link to either page.

## Privacy measures
- Randomized, hard-to-guess path for each person
- Randomized vCard filenames
- `noindex`, `nofollow`, `noarchive`, `nosnippet`, `noimageindex`
- Googlebot and Bingbot directives
- `robots.txt` blocks crawling
- `Referrer-Policy: no-referrer`
- Content Security Policy in HTML
- Root page reveals no contact links
- No sitemap
- Existing GA4 tracking retained
- `_headers` file included for hosts that support custom HTTP headers

## Important
GitHub Pages itself is public hosting. On a public GitHub repository, the source and randomized paths can still be discovered by someone who deliberately visits the repository and reads the code.

For stronger privacy:
1. Host from a private source repository on a platform that supports private repos.
2. Or use GitHub Enterprise Cloud private Pages access control if you want authenticated access (not ideal for frictionless business-card QR scans).

If you change these paths, regenerate the QR codes.

## Phone privacy
Phone numbers are intentionally excluded from the website source and from both vCard contact files.
Recipients must use the physical business card to obtain and manually add the phone number.

## Robust GitHub Pages fix
- Uses absolute `/Diaz-Brothers/...` paths for CSS/JS and sibling navigation.
- Each person's `contact.vcf` lives in the exact same folder as their `index.html`.
- The Add Contact button navigates directly to `contact.vcf` instead of forcing an HTML download.
- `.nojekyll` is included so GitHub Pages publishes the static file tree unchanged.
- `health.txt` can be used to verify the newest deployment is live.
