/**
 * Simple Text Accordion Example
 *
 */

// Listen for click on the document
const accordionTextToggle = document.querySelectorAll(".accordion-toggle");

accordionTextToggle.forEach((element) => {
  // Listen for click on the document
  element.addEventListener("click", function (event) {
    //Bail if our clicked element doesn't have the class
    if (!event.target.classList.contains("accordion-toggle")) return;

    // Get the target content
    var content = document.querySelector(element.getAttribute("data-target"));
    if (!content) return;

    // Prevent default link behavior
    event.preventDefault();

    // If the content is already expanded, collapse it and quit
    if (content.classList.contains("active")) {
      content.classList.remove("active");
      return;
    }

    // Get all open accordion content, loop through it, and close it
    var accordions = document.querySelectorAll(".accordion-content.active");
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove("active");
    }

    // Toggle our content
    content.classList.toggle("active");
  });
});
