document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".scroll-link");

  links.forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop,
                  behavior: "smooth"
              });
          }

    
          const menu = document.getElementById("dropdownMenu");
          if (menu) {
              menu.style.display = "none";
          }
      });
  });
});

function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  if (menu.style.display === "flex") {
      menu.style.display = "none";
  } else {
      menu.style.display = "flex";
  }
}