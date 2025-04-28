let body = document.body;
let overlay = document.querySelector(".overlay");
const header = document.querySelector("header .width-wrap");
const navigation = document.querySelector(".head-nav");
const menuBtn = document.querySelector(".menu-btn");
const subMenuBtns = document.querySelectorAll(".nav-submenu-btn");

let scrollTimeout;
let prevScroll = 0;

// ! Header In and Out on Scroll
window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
        let currScroll = window.pageYOffset;
        if (currScroll > prevScroll && currScroll >= 50) {
            header.style.top = "-70%"
        }
        else {
            header.style.top = "0"
        };
        prevScroll = currScroll <= 0 ? 0 : currScroll;
    }, 20);
});

const overlayTime = 400;
let clickable = false;

// ! Toggle Navigation
menuBtn.addEventListener("click", () => {
    if (clickable) return;
    clickable = true;

    const isMenuOpen = navigation.classList.toggle("show");
    header.classList.toggle("show");
    body.classList.toggle("hide");

    if (isMenuOpen) {
        overlay.classList.add("behind");
    } else {
        setTimeout(() => overlay.classList.remove("behind"), overlayTime);
    }

    subMenuBtns.forEach(btn => btn.classList.remove("show"));

    setTimeout(() => clickable = false, overlayTime);
});

// ! Toggle Dropdown
function toggleDropdowns(dropdown) {
    dropdown.forEach(btn => {
        btn.addEventListener("click", () => {
            const isOpen = btn.classList.contains("show");
            dropdown.forEach(b => b.classList.remove("show"));
            if (!isOpen) btn.classList.add("show");
        });
    });
}

// ! Toggle Sub Menu Dropdown
toggleDropdowns(subMenuBtns);

// ! Overlay Click: Close Navigation
overlay.addEventListener("click", () => {
    header.classList.remove("show");
    navigation.classList.remove("show");
    body.classList.remove("hide");
    setTimeout(() => overlay.classList.remove("behind"), overlayTime);
    subMenuBtns.forEach(btn => btn.classList.remove("show"));
});