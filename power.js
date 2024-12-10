const closeButton = document.getElementsByClassName("close")[0];
const closerDiv = document.getElementsByClassName("closer")[0];

closeButton.addEventListener("click", function() {
    closerDiv.style.display = "none";
});

const ogmain = document.getElementById("og-main");
const secmain = document.getElementById("sec-main");
const thirdmain = document.getElementById("third-main");
const collections = document.getElementById("collections");
const home = document.getElementById("home");
const contact = document.getElementById("contact");

collections.addEventListener("click", function() {
    ogmain.style.display = "none";
    secmain.style.display = "flex";
    thirdmain.style.display = "none";
    collections.style.display = "none";
    home.style.display = "inline";
    contact.style.display = "inline";
});

home.addEventListener("click", function() {
    ogmain.style.display = "flex";
    secmain.style.display = "none";
    thirdmain.style.display = "none";
    home.style.display = "none";
    collections.style.display = "inline";
    contact.style.display = "inline";
});

contact.addEventListener("click", function() {
    ogmain.style.display = "none";
    secmain.style.display = "none";
    thirdmain.style.display = "flex";
    collections.style.display = "inline";
    home.style.display = "inline";
    contact.style.display = "none";
});

var leftButton = document.getElementById("left-button");
var rightButton = document.getElementById("right-button");
var image = document.querySelector(".image-container");
var sliderMargin = 0;

rightButton.addEventListener("click", function() {
    if ((sliderMargin += 100) > 200) {
        sliderMargin = 0;
    }
    image.style.transform = "translateX(-" + sliderMargin + "vw)";
});

leftButton.addEventListener("click", function() {
    if (sliderMargin == 0) {
        sliderMargin = 150;
    } else {
        sliderMargin -= 100;
    }
    image.style.transform = "translateX(-" + sliderMargin + "vw)";
});

const searchInput = document.getElementById("searchbox");

searchInput.addEventListener("input", function() {
    let e = this.value.trim().toLowerCase();
    let t = document.querySelectorAll(
        ".mundle, .bundle, .sundle, .men, .women, .crimson, .red, .black, .gray, .brown, .white, .pastel, .green, .violet, .blue, .shirt, .pant, .coat, .jacket, .hoodie, .suit, .top, .maxi, .midi, .sweatshirt, .blouse, .vest"
    );

    t.forEach(t => {
        if (e === "") {
            t.style.display = "";
        } else if (t.classList.contains(e)) {
            t.style.display = "";
        } else {
            t.style.display = "none";
        }
    });
});

const checkboxes = document.querySelectorAll(".class-check");
const resetButton = document.getElementById("reset-button");
const allElements = document.querySelectorAll(".men, .women, .suit, .shirt, .midi");

allElements.forEach(e => {
    e.style.display = "";
});

checkboxes.forEach(e => {
    e.addEventListener("change", function() {
        let selectedValues = Array.from(checkboxes).filter(e => e.checked).map(e => e.value);

        allElements.forEach(t => {
            if (selectedValues.some(val => t.classList.contains(val))) {
                t.style.display = "";
            } else {
                t.style.display = "none";
            }
        });

        if (selectedValues.length < 1) {
            allElements.forEach(e => {
                e.style.display = "";
            });
        }
    });
});

resetButton.addEventListener("click", function() {
    checkboxes.forEach(e => {
        e.checked = false;
    });

    allElements.forEach(e => {
        e.style.display = "";
    });
});

resetButton.addEventListener("click", function() {
    checkboxes.forEach(e => {
        e.checked = false;
    });

    let e = document.querySelectorAll(".mundle, .bundle, .sundle");
    e.forEach(e => {
        e.style.display = "";
    });
});

const filterBox = document.getElementById("filter-box");
const filtersContainer = document.querySelector(".filters");

filterBox.addEventListener("click", function() {
    filtersContainer.classList.toggle("max-h-0");
    filtersContainer.classList.toggle("max-h-[200px]");
});

const containers = document.querySelectorAll(".parentprod");

containers.forEach(e => imageSwitcher(e));

const questions = document.querySelectorAll(".faq-question");

questions.forEach(e => {
    e.addEventListener("click", function() {
        let answer = this.nextElementSibling;

        answer.classList.toggle("show");

        if (answer.classList.contains("show")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = "0";
        }

        questions.forEach(e => {
            if (e !== this) {
                let otherAnswer = e.nextElementSibling;
                otherAnswer.classList.remove("show");
                otherAnswer.style.maxHeight = "0";
            }
        });
    });
});

function imageSwitcher(e) {
    let t = e.querySelectorAll("img");
    let n = 0;
    let l;

    function s() {
        t[n].classList.add("hidden");
        n = (n + 1) % t.length;
        t[n].classList.remove("hidden");
    }

    e.addEventListener("mouseenter", () => {
        s();
        l = setInterval(s, 1500);
    });

    e.addEventListener("mouseleave", () => {
        clearInterval(l);
        t.forEach((e, t) => e.classList.toggle("hidden", t !== 0));
        n = 0;
    });
}
