# AI Use Log

## Project
AI-assisted portfolio update for SWE 380 / CSC 580 Assignment 1.

## AI assistant
UM-approved generative AI assistant used for planning and implementation.

## Initial prompt
See the complete prompt in this file below.

## Requested planning behavior
The AI was explicitly instructed to:
- use the professional resume and `content-notes.md` as the source of truth;
- provide a file-by-file plan before modifying files;
- identify assumptions and risks;
- propose tests;
- avoid invented facts;
- preserve license/attribution;
- avoid backend, login, analytics, and external data collection;
- maintain mobile usability and accessibility.

## AI planning response — assignment record
### Proposed implementation plan
1. Inspect the starter repository structure and identify the primary HTML, CSS, JavaScript, image, and README/license files.
2. Update the primary HTML content to replace template identity and placeholder text with verified professional information.
3. Update navigation labels and section IDs so every navigation item maps to an actual section.
4. Add concise Education and Experience content from `content-notes.md`.
5. Add a technical-skills/interests section without overstating proficiency.
6. Update or remove placeholder images only where necessary; preserve attribution requirements.
7. Make focused responsive CSS changes only where the existing template fails the narrow-viewport criterion.
8. Make small accessibility corrections for keyboard focus, link text, headings, and image alt text.
9. Update README.md with project purpose, local run instructions, and attribution/license notes.
10. Run the test checklist, inspect the browser console, and manually review the resulting diff.

### Assumptions
- The starter repository already contains the core static portfolio layout.
- The existing license/attribution can remain intact while content is replaced.
- No real external project links are required unless the student can verify them.
- The resume is the authoritative source for professional facts.

### Risks identified
- Template placeholders may exist in files other than the primary HTML page.
- Existing CSS may have mobile-specific assumptions that break after longer resume content is added.
- Replacing images may accidentally remove required attribution.
- A visually correct page may still have broken anchor links or keyboard-accessibility problems.

### Test checklist proposed
- Page loads without a visible error.
- All navigation anchors reach intended sections.
- Placeholder identity/content has been removed.
- Experience and education content matches the source.
- External links work, if any are included.
- Narrow viewport remains usable.
- Keyboard navigation works.
- Images have correct alt treatment.
- No secrets/private data are present.
- Browser console has no unexplained errors.
- Acceptance criteria are satisfied.

## Human review of the plan

| Review item | Response |
|---|---|
| Accepted plan element | The file-by-file incremental approach was accepted because it limits unnecessary changes and makes each commit easier to review. |
| Revised plan element | The plan's assumption that external project links might be useful was narrowed: do not add project links unless a real destination can be verified. The resume does not provide project URLs. |
| Risk the AI identified | Longer content can expose responsive-layout problems that are not obvious on a desktop viewport. |
| Risk the AI missed | Publishing private contact information from the resume would violate the assignment's privacy requirement. This was addressed explicitly by excluding street address, phone number, and personal email from public portfolio content. |
