# Moscato Pizza Design System

Moscato Pizza is a small pizzeria group: three restaurants plus one food truck, based in Casilda, Santa Fe, Argentina. This system gives it a bold, editorial "retro scrapbook" identity for its marketing site, truck branding, and social/print collateral.

## Sources
- Brief text from the project owner describing the brand, tone, and target aesthetic (editorial/maximalist, retro scrapbook, Italian pizzeria).
- Five reference screenshots (`refs/`) of a comparable pizza-food-truck marketing site, used **only as a genre/layout reference** for composition patterns (postcard plaques, serrated photo frames, stat badges, award ribbons, testimonial grids). No third-party logo, real customer photograph, real testimonial copy, or literal wordmark from those references was reproduced — this system uses placeholder photography, an original wordmark treatment, and original sample copy written for Moscato Pizza.
- No codebase, Figma file, or existing Moscato Pizza brand assets (logo, fonts, photography) were provided.

## Caveats / substitutions
- **Logo:** two real lockups supplied — `assets/logo-wordmark-navy.png` (horizontal, navy, for light surfaces) and `assets/logo-stacked-cream.png` (stacked, cream/mustard with drop shadow, for navy/photo bands). Both transparent PNG; no SVG yet, so avoid placements above ~800px wide. `NavBar` still sets the wordmark in Salo Uberto — swap in the PNG when a vector arrives.
- **Fonts:** Salo Uberto (display/headlines), Azeret Mono (body/typewriter copy), and Awesome Serif Italic (accent/editorial italic) are the brand's real supplied font files (`assets/fonts/`). Caveat (handwritten script accents) is still a Google Fonts stand-in — no real script font was supplied; flag if one exists.
- **Photography:** three real brand photos supplied — `assets/images/hero-truck-crew.png` (16:9 hero), `pizzaiolo-holding-pizza.png` and `eating-slice-boxes.png` (4:5 portraits). Decorative cut-outs live in `assets/decor/`: two ringed pizza medallions (brown and sky), a 3D mustard "chef's kiss" hand, and `arch-ciao-pizza-pasta.svg` (vector "CIAO! · PIZZA & PASTA" lettering arch — recolourable, drop content into its empty lower half). Remaining slots still fall back to `PolaroidPhoto`'s flat-colour placeholders — supply food/detail/event photos to replace them.
- Icons are minimal (stars, hamburger glyph, arrow) and drawn as plain inline SVG strokes — no icon font was implied by the source material.

## Content fundamentals
- **Voice:** first-person-plural, warm and confident, short declarative sentences. "We serve 12 pizzas every 4 minutes." Founder-story copy signs off with a name and title ("Chef Gianluca").
- **Case:** headlines and plaques are ALL CAPS in the display face; body copy is sentence case.
- **Numbers do heavy lifting:** big stats (caterings served, festivals played, pizzas/hour) appear as oversized badges, not buried in paragraphs.
- **Social proof is literal and specific:** testimonials name the person and the occasion/company, not generic praise.
- **Hand-touches:** a script aside ("Ciao Amici!", "Wheely good pizzas") adds a human, informal beat next to formal headline type — used sparingly, 1 per section max.
- Emoji: not used. Unicode stars (★) are used for ratings inline in copy.

## Visual foundations

**Color** — navy (`--navy-900`) is the workhorse ink/border color on a warm cream page (`--cream-200`). Mustard (`--mustard-500`) is the single CTA/accent color — reserve it for buttons and one award ribbon per section. Sky blue (`--sky-200`) is the calm secondary surface for info callouts and photo mats. Red and green (`--red-600`/`--green-600`) are minimal Italian-flag accents for hover states and small marks — never large fills. Max 2 background colors active in one section (cream + one accent).

**Type** — four families, no more: **Salo Uberto** (condensed display, all caps, for headlines/plaques/stat numbers), **Azeret Mono** (monospace, for all paragraph copy, nav labels, and captions — reinforces the "printed postcard" feel), **Awesome Serif Italic** (`--font-accent` / `--text-accent-*`, for pull quotes, taglines, and menu descriptors — one editorial italic beat per section, never body copy), **Caveat** (handwritten script, for curved callouts and signatures only).

**Layout** — asymmetric, collaged, not gridded: photos overlap card edges, badges sit at rotated angles over collage backgrounds, plaques crop into their neighbors. Large flat color blocks divide sections (no gradients). Content is left-heavy with floating elements breaking the right edge.

**Backgrounds** — flat color blocks per section (cream / navy / sky), a subtle printed-paper grain overlay (`mp-grain`) on large color fields, no photographic full-bleed backgrounds, no gradients.

**Borders & shapes** — bold uniform-width navy borders (3px) on plaques and cards, an inset hairline for a "double border" postcard effect, serrated/perforated edges (`mp-stamp-edge`) on photo frames, notched hexagon corners on buttons, hexagon/diamond/octagon geometric badge shapes for stats.

**Shadows** — no soft/blurred shadows on bordered elements; use a hard offset navy shadow (`--shadow-card`, 6px solid offset) instead, consistent with the printed/cut-paper look. Soft blurred shadow (`--shadow-soft`) is reserved for the few photo elements that need to lift off a busy collage.

**Corners** — mostly sharp/notched; the one soft radius (`--radius-md`, 10px) appears only on the postcard plaque's rounded rectangle variant and pill badges (`--radius-pill`).

**Motion** — minimal: buttons lift 2px on hover, links switch to red on hover, no page-load animation, no bounce/easing flourishes. This is a printed-collage aesthetic, not a kinetic one.

**Imagery** — three photographs: `assets/images/hero-truck-crew.png` (16:9 hero) plus two 4:5 portraits, `pizzaiolo-holding-pizza.png` (staff portrait under the lit fascia — founder/story and polaroid slots) and `eating-slice-boxes.png` (flash-lit night crowd with branded boxes — social proof and events). Portraits crop to the subject; never letterbox them into a hero band. For the hero, crop to 21:9 with the focal point at the crew's eye line (~42% from top) for hero bands, and pass it to `PolaroidPhoto` via `src` for framed placements. No tinting, duotone, or gradient overlays; keep display type off the busy centre (use a plaque or ribbon). Tone — warm, candid, on-location documentary photography (trucks, crews, events) — never studio/white-background product shots. Cropped into rotated polaroid/stamp frames rather than shown full-bleed.

**Transparency/blur** — essentially none; surfaces are flat and opaque, matching the cut-paper collage metaphor.

## Iconography
No icon font or SVG icon set was found in the source material. Use plain inline-SVG line icons (1.5px stroke, matching the navy ink color) only where functionally required — star ratings, a menu hamburger, a down arrow. Do not introduce a broader icon system (e.g. Lucide/Heroicons sheets) unless a real product surface needs it; keep icon use minimal and always secondary to the type- and shape-driven brand language above.

## Components
Brand-guidelines-only run (no component library source was attached), so a small set was authored sized to what the reference material actually shows:
- **core/** — `Button` (notched CTA, 3 variants), `Badge` (star rating + pill tag)
- **navigation/** — `NavBar`
- **brand/** — `PostcardPlaque` (hexagon headline plaque), `LocationPlaque` (pinched-waist hexagon plaque with burst-star rating, for hero photos), `StampBadge` (circle/diamond/octagon/bloom/gem/plaque stat badge), `ScoopCard` (scoop-corner double-outline content card for story copy, checklists, or a CTA), `PolaroidPhoto` (serrated photo frame), `Ribbon` (tilted award strip), `CurvedText` (script text on an arc), `LetterCard` (bordered "carta" sheet with scooped corners, double hairline frame and a photo slot), `TicketCard` (ticket-shaped blurb card with concave corner bites and a full-width CTA), `TicketPanel` (landscape ticket panel with double brown rule frame), `SpecCard` (notched photo frame with checkerboard edge, stat row and CTA), `CheckerBar` (full-bleed two-row checkerboard divider rule, small/large)
- **feedback/** — `TestimonialCard`

Intentional additions beyond the reference screenshots: none — every component above has a direct counterpart in the reference material.

## UI kit
`ui_kits/marketing-site/` — a click-through homepage recreation: nav, hero with plaque + collage + stat badges, an award-ribbon strip, a testimonials grid, a founder-story "postcard" section, and a footer. Composed entirely from the components above.

## Index
- `styles.css` — root stylesheet, imports everything under `tokens/`
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `effects.css`
- `components/` — see above
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand motifs)
- `assets/` — logo lockups, `decor/` cut-outs, `images/` photography, `fonts/`
- `ui_kits/marketing-site/` — homepage recreation
- `refs/` — reference screenshots (layout/genre inspiration only, see Sources)
- `thumbnail.html` — project tile
- `SKILL.md` — portable skill file for Claude Code

## Ask
Logo, fonts and three photographs are now real. What's still missing: **a vector (SVG) logo** for large placements, and more photography — food detail shots, trucks on location, and event/crowd frames — to retire the remaining `PolaroidPhoto` placeholders.
