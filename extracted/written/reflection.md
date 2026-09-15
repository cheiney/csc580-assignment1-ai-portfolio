# Reflection

## A. GitHub practice
**Which GitHub action, issue, branch, commit, pull request, review, or Pages deployment was most useful to you, and why?**

The feature branch and pull request workflow were the most useful parts of the assignment. They separated the experimental AI-assisted work from the default branch and created a natural checkpoint for reviewing the changes before merging them. The pull request also made the change set easier to understand as a coherent engineering task rather than a collection of unrelated edits.

## B. AI practice
**Which AI-generated suggestion did you accept, and what evidence justified accepting it?**

I accepted the suggestion to make the portfolio changes incrementally instead of asking the AI to rewrite the entire repository. This was justified because smaller changes are easier to inspect with a Git diff, easier to test, and easier to revert if an AI-generated change is incorrect. I also accepted the suggestion to map the implementation to explicit acceptance criteria because it made the final review more objective.

## C. AI limitation
**What did the AI get wrong, overlook, or make unnecessarily complicated? How did you detect and correct it?**

A key limitation was that an AI assistant could not reliably determine which resume information was appropriate for public publication simply from the existence of that information in the resume. The resume contained private contact information that should not be exposed on a public portfolio. I detected this during a human privacy review and created `content-notes.md` as a deliberately filtered public-content source. I also treated unverifiable project URLs as something to omit rather than something the AI should invent.

## D. Engineering judgment
**How did the workflow change your understanding of the statement “AI may generate code, but engineers remain responsible for the system”?**

The workflow made the distinction much more concrete. Generating code is only one step. The engineer still has to define the requirements, constrain the AI, verify factual content, inspect the diff, test behavior, evaluate accessibility and privacy, and decide whether the result is safe to publish. A page can look correct while still containing broken navigation, unsupported claims, private information, or accessibility problems. The human review therefore is part of the implementation, not an optional step after the AI has finished.

## E. Next improvement
**Identify one improvement you would make in a second iteration. State its value, risk, and the evidence you would need before implementing it.**

I would add a small project section with links to selected technical projects, particularly AI/ML and financial-analytics work. The value would be giving reviewers concrete evidence of technical ability rather than relying only on a resume summary. The risk is that project descriptions or links could overstate the work or expose information that should not be public. Before implementing it, I would need verified project repositories or demonstrations, accurate descriptions of my contribution, and confirmation that the projects can be publicly shared.
