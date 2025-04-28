body = document.body;
overlay = document.querySelector(".overlay");
const vidBtn = document.querySelector(".hero .btn-style");
const vidCtr = document.querySelector(".vid-ctr");
const heroVid = document.querySelector(".hero-vid");
const bgVid = document.querySelector(".bg-vid");
const closeBtn = document.querySelector(".close-btn");

// ! Display Promotional Video
vidBtn.addEventListener("click", () => {
    body.classList.add("hide");
    vidCtr.classList.add("show");
    bgVid.pause();
    heroVid.play();
})

// ! Close and Reset the Video
function closeHeroVideo() {
    vidCtr.classList.remove("show");
    body.classList.remove("hide");
    heroVid.pause();
    heroVid.currentTime = 0;
    bgVid.play();
}

overlay.addEventListener("click", closeHeroVideo);
closeBtn.addEventListener("click", closeHeroVideo);

const testimonials = document.querySelectorAll(".indi-desc");
const leftTestBtn = document.querySelector(".slider-btns .left-btn")
const rightTestBtn = document.querySelector(".slider-btns .right-btn")
const testBtns = document.querySelectorAll(".slider-btns .test-btn")

let studentposition = 0;

// ! Update Testimonial on current position
function updateTestimonial(pos) {
    testimonials.forEach((test, i) => {
        test.classList.toggle("show", i === pos)
    });

    testBtns.forEach((btn, i) => {
        btn.classList.toggle("show", i === pos);
    });
}

// ! Previous Testimonial Button
leftTestBtn.addEventListener("click", () => {
    studentposition = (studentposition - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(studentposition);
});

// ! Next Testimonial Button
rightTestBtn.addEventListener("click", () => {
    studentposition = (studentposition + 1) % testimonials.length;
    updateTestimonial(studentposition);
});

// * Initialize the testimonial's show class
updateTestimonial(studentposition);

// ! Individual Testimonial Buttons
testBtns.forEach((test, i) => {
    test.addEventListener("click", () => {
        studentposition = i;
        updateTestimonial(studentposition);
    });
});

const coursesCards = document.querySelectorAll(".info-card");
const coursesImgs = document.querySelectorAll(".info-card .card-img");
let cardposition = 0;

function updateCourse(pos) {
    coursesImgs.forEach((img, i) => {
        img.classList.toggle("show", i === pos)
    });
}

coursesCards.forEach((card, i) => {
    card.addEventListener("mouseover", () => {
        updateCourse(i);
    });
});

// * Initialize the course card's show class
updateCourse(cardposition);
