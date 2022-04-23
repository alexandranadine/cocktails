const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");
let options = {};

const observer = new IntersectionObserver(function (entries, observeHero) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('nav-onscroll');
        } else {
            header.classList.remove('nav-onscroll');
        }
    })
},
options);

observer.observe(heroSection);
