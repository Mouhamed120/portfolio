window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// =========================== modal =============================

const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");
// console.log(serviceModals, learnMoreBtns, modalCloseBtns);

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
};

learnMoreBtns.forEach((learnMoreBtn, i) => {
  learnMoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((serviceModal) => {
      serviceModal.classList.remove("active");
    });
  });
});

// ========================== portfoli-section ======================= //

const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");
console.log(portfolioModels, imgCards, portfolioCloseBtns);

var portfolioModal = function (modalClick) {
  portfolioModels[modalClick].classList.add("active");
};

imgCards.forEach((imgCrad, i) => {
  imgCrad.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioModalCloseBtn) => {
  portfolioModalCloseBtn.addEventListener("click", () => {
    portfolioModels.forEach((portfolioModalVieuw) => {
      portfolioModalVieuw.classList.remove("active");
    });
  });
});

// ================= scroll-btn ==============

const scrollBtn = document.querySelector(" .scroll-to-top");
window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});
console.log(scrollBtn);

scrollBtn.addEventListener("click", () => {
  console.log("yes");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// =================== Menu item active ===============
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  // La propriété renvoie le nombre de pixels que le document fait actuellement défiler verticalement.window.pageYOffset

  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    // je memoriser la height de chaque section
    const sectionHeight = current.offsetHeight;

    // la distance par rapport au top
    const sectionTop = current.offsetTop - 50;
    // je recupère l'id de chaque section
    const id = current.getAttribute("id");
    console.log(id);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

// ==================== theme =================== //
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  console.log("Yes");
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");
  localStorage.setItem("save-theme", getcurrenTheme());
  localStorage.setItem("save-icon", getcurrentIcon());
});

const getcurrenTheme = document.body.classList.contains("dark-theme")
  ? "dark"
  : "light";
const getcurrentIcon = document.body.classList.contains("sun") ? "sun" : "moon";
const saveTheme = localStorage.getItem("save-theme");
const saveIcon = localStorage.getItem("save-icon");

if (saveTheme) {
  document.body.classList[saveTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[saveIcon === "sun" ? "add" : "remove"]("sun");
}

//======================= responsive menu ===================== //
const menuBtn = document.querySelector(".nav-menu-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("active");
  console.log("yes");
});
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});
