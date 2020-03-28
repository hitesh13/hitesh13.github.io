const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    links.forEach((links, index) => {
      if (links.style.animation) links.style.animation = "";
      else
        links.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 +
          0.1}s`;
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();
window.onload = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
