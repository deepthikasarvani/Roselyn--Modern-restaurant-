/* ================= NAVBAR SHADOW ================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.4)";

    }

    else{

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});


/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* ================= DATE LIMIT ================= */

const picker = document.getElementById("datePicker");

const today = new Date();

const nextWeek = new Date();

nextWeek.setDate(today.getDate()+7);

picker.min = today.toISOString().split("T")[0];

picker.max = nextWeek.toISOString().split("T")[0];


/* ================= RESERVATION ================= */

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("✨ Thank you for choosing Roselyn.\n\nYour reservation request has been received.");

    form.reset();

});