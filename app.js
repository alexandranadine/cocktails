const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");
const faders = document.querySelectorAll(".fade-in");
const navOptions = {};
const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px 100px 0px'
};

const navObserver = new IntersectionObserver(function (entries, navObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-onscroll");
    } else {
      header.classList.remove("nav-onscroll");
    }
  });
}, navOptions);

navObserver.observe(heroSection);

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
