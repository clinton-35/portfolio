function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.getElementById("downloadCV").addEventListener("click", function() {
    window.open("./assets/cv.pdf");
  });