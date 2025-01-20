import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Sections and corresponding links/spans
  const sections = ["section1", "section2", "section3"];
  const links = sections.map((section) => document.querySelector(`a[href="#${section}"]`));
  const spans = sections.map((section) => document.querySelector(`span[data-target="${section}"]`));

  // Helper function to update classes
  function updateActiveClasses(activeIndex) {
    links.forEach((link, index) => {
      // Remove active classes from all links
      link.classList.remove("text-white", "font-semibold");
      // Add active class to the current link
      if (index === activeIndex) {
        link.classList.add("text-white", "font-semibold");
      }
    });

    spans.forEach((span, index) => {
      // Remove width classes from all spans
      span.classList.remove("w-10", "w-4");
      // Add the correct width class to the active span
      span.classList.add(index === activeIndex ? "w-10" : "w-4");
    });
  }

  // Initial state (start at section 1)
  updateActiveClasses(0);

  // ScrollTrigger logic
  ScrollTrigger.create({
    onUpdate: (e) => {
      const progress = e.progress;

      if (progress <= 0.33) {
        updateActiveClasses(0); // section 1
      } else if (progress <= 0.66) {
        updateActiveClasses(1); // section 2
      } else {
        updateActiveClasses(2); // section 3
      }
    },
  });
});
