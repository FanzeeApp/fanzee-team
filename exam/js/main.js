// HEADER BURGER MENU /////////////////////////

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  document.body.classList.toggle("menu-opened");
});

// Show or hide the "Back to Top" button based on scroll position
window.addEventListener("scroll", function () {
  var backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
