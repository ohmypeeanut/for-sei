// =========================
// LANDING TRANSITION
// =========================

const button = document.getElementById("continueBtn");

const landing = document.querySelector(".landing");

const page2 = document.querySelector(".page2");

button.addEventListener("click", function () {

    // Fade out landing
    landing.style.opacity = "0";

    setTimeout(function () {

        // Hide landing
        landing.style.display = "none";

        // Show page 2
        page2.style.display = "block";

        // Small delay para gumana ang fade in
        setTimeout(function () {

            page2.style.opacity = "1";

            // Scroll sa simula ng page 2
            page2.scrollIntoView({

                behavior: "smooth"

            });

        }, 50);

    }, 800);

});


// =========================
// JOURNAL REVEAL
// =========================

const journals = document.querySelectorAll(".journal");

const journalObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.3

});

journals.forEach((journal) => {

    journalObserver.observe(journal);

});


// =========================
// ENDING REVEAL
// =========================

const ending = document.querySelector(".ending");

const endingObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            ending.classList.add("show");

        }

    });

}, {

    threshold: 0.5

});

endingObserver.observe(ending);

const flower = document.getElementById("flower");

flower.addEventListener("click", function(){

    // Fade out page 2
    page2.style.opacity = "0";

    setTimeout(function(){

        // Itago ang page 2
        page2.style.display = "none";

        journals.forEach(function(journal){

    journal.classList.remove("show");

});

ending.classList.remove("show");

        // Ipakita ulit ang landing
        landing.style.display = "flex";

        // Maliit na delay para gumana ang fade
        setTimeout(function(){

            landing.style.opacity = "1";

        },50);

        // Bumalik sa pinakataas
        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },800);

});