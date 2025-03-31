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
      });
    });
  
    // Paralaksa
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
  
      document.querySelectorAll(".back").forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.1}px)`;
      });
  
      document.querySelectorAll(".middle").forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.3}px)`;
      });
  
      document.querySelectorAll(".front").forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.6}px)`;
      });
    });
  });
  