

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  hamburgerNav = document.getElementById('hamburger-nav');

  if (menu.classList.contains("open")) {
    hamburgerNav.style.paddingBottom = "15em";
  } else {
    hamburgerNav.style.paddingBottom = "3em";
  }
}

