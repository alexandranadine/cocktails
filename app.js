
// ------------------INTERSECTION OBSERVER - CHANGES NAVBAR ON SCROLL

const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");
const navOptions = {};

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

// ------------------INTERSECTION OBSERVER - CARDS FADE IN

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 1,
  rootMargin: '0px 0px 100px 0px'
};

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

// ------------------------------MODAL POPUPS

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('#overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal =button.closest('.modal')
    closeModal(modal);
  })
})

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}