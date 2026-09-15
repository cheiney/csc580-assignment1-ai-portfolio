# Acceptance Criteria

| # | Acceptance criterion | How I will verify it |
|---|---|---|
| 1 | The landing page displays Christian Benjamin Namath Heiney and a concise professional role related to Asset Liability Management and financial analytics. | Load the home page and visually confirm the name and role appear above the fold. |
| 2 | The portfolio contains at least two substantive sections describing professional experience and education, using only verified resume information. | Navigate to Experience and Education and compare displayed content against `content-notes.md`/resume. |
| 3 | Navigation links move to the intended portfolio sections without broken links. | Click every navigation item and verify the browser reaches the corresponding section. |
| 4 | The page remains readable and usable on a narrow mobile viewport without horizontal scrolling or overlapping content. | Test with a narrow responsive viewport and confirm text, navigation, and sections remain usable. |
| 5 | No private contact information or placeholder/template identity remains in the published site. | Search the source and rendered page for the old template name, placeholder email/phone, street address, and other private data. |
| 6 | External/project links, if included, use real destinations only; no invented URLs are presented as factual links. | Open each external link and confirm the destination is valid. |
| 7 | Keyboard navigation is usable and images have meaningful alternative text or are explicitly decorative. | Tab through interactive elements and inspect image `alt` attributes. |
| 8 | The browser console contains no unexplained errors during normal page use. | Open developer tools, reload the page, navigate through all sections, and record any console errors. |
