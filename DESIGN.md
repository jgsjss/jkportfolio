---
name: 전광수 포트폴리오
description: A Java/Spring backend career set as an issued 경력확인서 on pale green security paper.
colors:
  paper: "#e6eee7"
  sheet: "#f6f9f5"
  ink: "#1b2430"
  ink-soft: "#46525f"
  rule: "#1b2430"
  rule-soft: "#9fb2a6"
  cell: "#d7e3da"
  seal: "#c4302b"
  link: "#1f4fa3"
  link-hover: "#143a7d"
  guilloche: "#266854"
typography:
  display:
    fontFamily: "NanumSquare, Malgun Gothic, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(38px, 5.6vw, 64px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.5em"
  headline:
    fontFamily: "NanumSquare, Malgun Gothic, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(24px, 3.2vw, 34px)"
    fontWeight: 800
    letterSpacing: "0.18em"
  title:
    fontFamily: "NanumSquare, Malgun Gothic, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(19px, 2vw, 23px)"
    fontWeight: 800
    lineHeight: 1.45
  figure:
    fontFamily: "NanumSquare, Malgun Gothic, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(20px, 2.4vw, 28px)"
    fontWeight: 800
    lineHeight: 1.35
  body:
    fontFamily: "NanumSquare, Malgun Gothic, Apple SD Gothic Neo, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "NanumSquare, Malgun Gothic, Apple SD Gothic Neo, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    letterSpacing: "0.08em"
  number:
    fontFamily: "Consolas, D2Coding, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 400
    letterSpacing: "0.02em"
    fontFeature: "tnum"
rounded:
  none: "0px"
  button: "2px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  sheet: "clamp(20px, 4.5vw, 64px)"
components:
  button-primary:
    backgroundColor: "{colors.link}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.button}"
    padding: "10px 18px"
  button-primary-hover:
    backgroundColor: "{colors.link-hover}"
    textColor: "{colors.sheet}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.link}"
    rounded: "{rounded.button}"
    padding: "10px 18px"
  button-secondary-hover:
    backgroundColor: "{colors.link}"
    textColor: "{colors.sheet}"
  form-header-cell:
    backgroundColor: "{colors.cell}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  form-data-cell:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "12px 16px"
  sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet}"
    width: "1120px"
  index-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "12px 12px 10px"
  index-link-active:
    textColor: "{colors.link}"
---

# Design System: 전광수 포트폴리오

## Overview

**Creative North Star: "The Issued Certificate"**

Every surface is a sheet of official paper issued by a public institution: pale green security stock with a fine guilloche line pattern, navy-black ink, ruled tables with tinted header cells, a form number and page count at the top of each sheet, and one red name seal. The system borrows its authority from the document form itself, so nothing is decorated beyond what such a document would carry. Information lives in ruled forms, not in cards, badges, or panels.

Density is that of a filled-in form: compact rows, generous body leading (1.75), headings spaced wide like the printed titles of Korean administrative forms. The page is a stack of sheets on a green desk, each one an 별지 (attached sheet) numbered in sequence, ending with "― 이하 여백 ―" where the form has nothing more to say. Color carries meaning, not mood: ink for content, blue only for things you can click, red only for the seal.

Rejected outright by the direction: the dark hero, skill-badge clouds, and project-card grids of the generic developer portfolio.

**Key Characteristics:**
- Security-paper sheets with runtime-generated guilloche bands and a rosette behind the first sheet's title.
- Ruled form tables (2px outer rule, 1px inner rules, tinted header cells) as the only content container.
- Wide-tracked, centered, extra-bold gothic titles; tabular numerals for every figure and date.
- Blue ink reserved for interaction; a single red seal per page.
- Square corners everywhere except a barely softened button (2px).

## Colors

A cool, low-chroma paper-and-ink palette with exactly two saturated inks, each with a single job.

### Primary
- **Ballpoint Blue** (link): every clickable thing and nothing else: links, buttons, the active table-of-contents entry, and the focus ring. Its darker sibling **Pressed Blue** (link-hover) is the hover state only.

### Secondary
- **Seal Vermilion** (seal): the name seal on the certificate sheet, rendered through a turbulence displacement filter so it reads as stamped ink. Used once per page.

### Neutral
- **Security Green Paper** (paper): the page background, the desk the sheets sit on, and the sticky index bar (92% mixed toward transparent with a light blur).
- **Sheet White** (sheet): the face of every sheet; also the text color on filled blue buttons.
- **Form Ink** (ink / rule): body text and the hard rules of every table and sheet border. Ink and rule share one value on purpose: the rules are printed in the same ink as the text.
- **Faded Ink** (ink-soft): secondary text: sheet meta lines, leads, sub-lines in cells, completed states, struck-through "before" values, the end-of-form mark.
- **Pale Rule** (rule-soft): the soft divider under the index bar, row dividers in stacked mobile tables, and the scrollbar thumb.
- **Header Tint** (cell): the background of table header cells and contact labels; also the text selection color.
- **Guilloche Green** (guilloche): the stroke of the generated guilloche tile (9% opacity) and certificate rosette (14% opacity). Never used at full strength.

### Named Rules
**The Blue Ink Rule.** Blue means clickable. If an element is not interactive it is never blue, and every interactive element is.

**The One Seal Rule.** Seal Vermilion appears exactly once per page, as the name seal. It is not an accent color, an alert color, or a highlight.

## Typography

**Body Font:** NanumSquare (with Malgun Gothic, Apple SD Gothic Neo, sans-serif), self-hosted at weights 400, 700, 800.
**Number Font:** Consolas (with D2Coding, ui-monospace, monospace), only for document identifiers such as the confirmation number.

**Character:** One Korean gothic set like a government form: extra-bold, widely tracked titles over plain, evenly leaded body text. Text breaks on words (`word-break: keep-all`), never mid-syllable-cluster.

### Hierarchy
- **Display** (800, clamp(38px, 5.6vw, 64px), 1.1, tracked 0.5em with matching text-indent so it stays optically centered): the document title, once, on the certificate sheet. Tracking drops to 0.3em under 720px.
- **Headline** (800, clamp(24px, 3.2vw, 34px), tracked 0.18em, centered): each attached sheet's title.
- **Title** (800, clamp(19px, 2vw, 23px), 1.45): case headings inside a sheet, prefixed by a lighter, smaller "사안 N" number in Faded Ink.
- **Figure** (800, clamp(20px, 2.4vw, 28px), 1.35): the one emphasized value inside a form cell (the applicant's name).
- **Body** (400, 17px / 16px under 720px, 1.75): cell text and paragraphs; lead paragraphs cap at 70ch, the attestation at 46ch.
- **Label** (700, 14px, tracked 0.08em): table header cells, contact labels, index links. Sheet meta lines use the same 14px at 400 in Faded Ink.

### Named Rules
**The Tabular Figures Rule.** Every date, period, count, page number, and row number uses tabular numerals (`font-variant-numeric: tabular-nums`). Figures line up like a ledger.

**The Form Title Rule.** Titles are centered and tracked wide, the way printed form titles are; body text is never tracked.

## Layout

A single centered column of sheets, max 1120px wide, on the paper background. Sheets are separated by clamp(28px, 5vw, 56px) and padded clamp(20px, 4.5vw, 64px); the first sheet (the certificate) is at least the viewport height minus the index bar (capped at 860px), with its attestation and seal pushed to the bottom. A sticky index bar lists the sheets in order and highlights the one in view, scrolling itself horizontally on narrow screens.

Each sheet follows the same order: meta line (form number left, "(7쪽 중 N쪽)" page count right), centered headline, optional lead, one or more ruled forms, then the "― 이하 여백 ―" end mark where the form ends early.

Spacing runs on a 4px base (4, 8, 12, 16, 20, 24) inside components; sheet-level spacing uses fluid clamps. The single breakpoint is 720px: multi-column tables marked as stackable become one block per row with each cell labeled from `data-label`, header cells narrow to 5.5em, and the seal shrinks from 92px to 76px. In print, the index and action buttons disappear and each sheet breaks to its own page.

## Elevation & Depth

Depth exists only between the sheet and the desk. Each sheet lifts off the paper background with one soft, two-layer paper shadow; nothing inside a sheet is ever elevated. Within a sheet, hierarchy comes from rule weight (2px outer, 1px inner), header tint, and the inset second border.

### Shadow Vocabulary
- **Paper lift** (`box-shadow: 0 1px 2px rgba(27, 36, 48, 0.08), 0 14px 32px -12px rgba(27, 36, 48, 0.22)`): every sheet, removed in print.

### Named Rules
**The One Lift Rule.** Only the sheet casts a shadow. Tables, buttons, stamps, and the seal sit flat on the paper.

## Shapes

Square-cornered and ruled. Sheets carry a 2px ink border plus a 1px ink outline inset by 8px (6px on narrow screens), giving the double frame of a certificate. Tables use a 2px outer rule and 1px cell rules. State stamps are square boxes with a 1px border; the "in progress" state uses a 3px double border. The only softened corners are buttons (2px) and the seal's rectangle (rx 6 within its 100-unit viewBox), rotated -5 degrees as if stamped by hand.

### Named Rules
**The Square Corner Rule.** Containers are rectangles. A radius above 2px belongs only to the seal.

## Components

### Buttons
Plain, inked, rectangular.
- **Shape:** nearly square (2px), 1.5px Ballpoint Blue border, 700 weight at 15px, optional 16px line icon with an 8px gap.
- **Primary:** filled Ballpoint Blue with Sheet White text; hover deepens to Pressed Blue (border follows).
- **Secondary:** transparent with blue text and border; hover fills blue with Sheet White text.
- **Transitions:** background and color, 0.2s ease-out. Focus: the global 2px blue outline offset 3px.

### Form Table (signature)
The universal container.
- **Structure:** full width, collapsed borders, 2px ink outer rule, 1px ink cell rules, 12px 16px cell padding.
- **Header cells:** Header Tint background, 700 weight, tracked 0.08em, shrink-to-fit width; column headers are centered and tracked 0.04em.
- **Cell content:** a primary line plus an optional sub-line in Faded Ink at 0.92em; lists inside cells are unbulleted with 4px between items.
- **Before/after:** the old value struck through in Faded Ink (2px strike), an arrow, the new value in 800 weight.
- **Mobile:** stackable tables turn each row into a block separated by a 2px rule, cells divided by Pale Rule, each prefixed by its 13px bold label.

### State Stamps
- **Style:** inline square box, 1px border in currentColor, 13px 700, 0 8px padding.
- **Live:** Form Ink, 800 weight, 3px double border.
- **Done:** Faded Ink, single border.

### Navigation (Sheet Index)
- **Style:** sticky full-width bar on translucent paper with a 6px blur and a Pale Rule bottom border; a horizontal ordered list of sheet names at 14px 700 in Faded Ink.
- **States:** hover and current sheet turn Ballpoint Blue with a 2px blue underline bar; the current entry is tracked by scroll position and centered in the scrollable list.

### Sheet
- **Style:** Sheet White face over the guilloche tile, double ink frame, paper lift shadow, form-number meta line, centered headline, end mark.
- **Certificate variant:** the first sheet adds the rosette centered behind the title, the display title, and the attestation row (statement, actions, issuer name, seal).

### Seal (signature)
A 92px square red seal of four characters (name plus 인) in NanumSquare 800, distorted by an SVG turbulence filter. On load it stamps once: from 1.7x scale, -12 degrees, blurred, to rest at -5 degrees, 0.55s on cubic-bezier(.16, 1, .3, 1) after 0.5s. No animation under reduced motion.

## Do's and Don'ts

### Do:
- **Do** put every set of facts in a ruled form table with tinted header cells (2px outer, 1px inner rules).
- **Do** start each sheet with its meta line (form number and "(N쪽 중 M쪽)") and close short forms with "― 이하 여백 ―".
- **Do** set every date, period, count, and row number in tabular numerals.
- **Do** use Ballpoint Blue for every link, button, and the focus ring, and for nothing else.
- **Do** keep the guilloche and rosette at their faint opacities (9% and 14%) so text contrast is untouched.
- **Do** keep the seal stamp a one-time, reduced-motion-safe animation.

### Don't:
- **Don't** use a dark hero, skill-badge clouds, or a grid of project cards.
- **Don't** use Seal Vermilion anywhere except the single name seal.
- **Don't** give containers rounded corners or their own shadows; only sheets lift.
- **Don't** track body text; wide tracking is for display and sheet titles.
- **Don't** color non-interactive text blue.
