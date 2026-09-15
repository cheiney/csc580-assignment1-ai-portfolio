const links = Array.from(document.querySelectorAll(".nav-list a"));
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = `#${entry.target.id}`;
      links.forEach((link) => {
        const active = link.getAttribute("href") === id;
        if (active) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));