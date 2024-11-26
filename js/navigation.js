const toggleBtn = document.querySelector(".toggleNavBtn");
const navContent = document.getElementById("navigation");

// Toggle the visibility of the navigation menu
toggleBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  navContent.style.display =
    navContent.style.display === "flex" ? "none" : "flex";
});

// Function to hide the navigation menu if clicked outside of it
function toggleResNav(event) {
  if (!toggleBtn.contains(event.target) && !navContent.contains(event.target)) {
    navContent.style.display = "none";
  }
}

// Function to check the window size and update the navigation menu visibility
function handleResize() {
  if (window.innerWidth > 1000) {
    navContent.style.display = "flex";
    toggleBtn.style.display = "none";
    document.removeEventListener("click", toggleResNav);
  } else {
    // For mobile or small screens
    navContent.style.display = "none";
    toggleBtn.style.display = "flex";
    document.addEventListener("click", toggleResNav);
  }
}

// Initial setup and event listener for window resizing
window.addEventListener("resize", handleResize);
window.addEventListener("DOMContentLoaded", handleResize);
handleResize();
