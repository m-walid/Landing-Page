/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navbarList = document.querySelector("#navbar__list");
const sectionsElms = document.querySelectorAll("section");
const scrollToTop = document.querySelector("#scroll-home");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNav() {
  const listFrag = document.createDocumentFragment();
  sectionsElms.forEach((section) => {
    const liNode = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.classList.add("menu__link");
    anchor.textContent = section.dataset.nav;
    anchor.href = `#${section.id}`;
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
    liNode.appendChild(anchor);
    listFrag.appendChild(liNode);
  });
  navbarList.appendChild(listFrag);
}
buildNav();

// Add class 'active' to section when near top of viewport
function setActiveSection() {
  sectionsElms.forEach((section) => {
    const navLi = document.querySelector(`a[href="#${section.id}"]`); //select the section's link
    const sectionRect = section.getBoundingClientRect();
    if (sectionRect.top <= 100 && sectionRect.bottom >= 100) {
      section.classList.add("your-active-class");
      navLi.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      navLi.classList.remove("active");
    }
  });
}
// Scroll to anchor ID using scrollTO event

let btTimeout;
function toggleScrollBt() {
  //checks if the section is in viewport
  if (document.documentElement.scrollTop > 40 || document.body.scrollTop > 40) {
    scrollToTop.classList.add("show");
  }
  clearTimeout(btTimeout);
  btTimeout = setTimeout(() => scrollToTop.classList.remove("show"), 2500);
}
/**
 * End Main Functions
 * Begin Events
 *
 */
scrollToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
document.addEventListener("scroll", () => {
  toggleScrollBt();
  setActiveSection();
});

// Build menu

// Scroll to section on link click

// Set sections as active
