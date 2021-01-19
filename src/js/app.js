'user strict'


document.addEventListener("DOMContentLoaded", () => {
  scrollNav();
  fixedNav();
});

const fixedNav = function () {
  const banner = document.querySelector(".header");

  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      banner.classList.remove("fixed");
    } else {
      banner.classList.add("fixed");
    }
  });

  observer.observe(document.querySelector(".about-fest"));
};

const scrollNav = () => {
  const links = document.querySelectorAll(".main-navigation a");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const section = document.querySelector(e.target.attributes.href.value);
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
