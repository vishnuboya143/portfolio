/* ==========================================
   VISHNU VARDHAN PORTFOLIO
   main.js
========================================== */

// ==========================================
// PRELOADER
// ==========================================

window.addEventListener("load", () => {

const preloader=document.getElementById("preloader");

preloader.style.opacity="0";

preloader.style.visibility="hidden";

setTimeout(()=>{

preloader.remove();

},500);

});

// ==========================================
// AOS INITIALIZATION
// ==========================================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ==========================================
// TYPING EFFECT
// ==========================================

if (document.getElementById("typing")) {

    new Typed("#typing", {

        strings: [
            "Software Developer",
            "Frontend Developer",
            "Backend Developer",
            "ECE Student",
            "Problem Solver",
            "Tech Enthusiast"
        ],

        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true

    });

}

// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}

// ==========================================
// STICKY NAVBAR
// ==========================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (header) {

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    }

});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

window.addEventListener("scroll", () => {

    const progress = document.getElementById("progress-bar");

    if (progress) {

        const scrollTop = document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const percentage = (scrollTop / height) * 100;

        progress.style.width = percentage + "%";
    }

});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 350) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ==========================================
// LIGHT / DARK MODE
// ==========================================

const themeBtn = document.querySelector(".theme-toggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const icon = themeBtn.querySelector("i");

        if (icon) {

            if (document.body.classList.contains("light")) {

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

            } else {

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

            }

        }

    });

}

// ==========================================
// ANIMATED COUNTERS
// ==========================================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = Number(counter.getAttribute("data-target"));

    let count = 0;

    const speed = target / 80;

    const update = () => {

        if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("Portfolio Loaded Successfully 🚀");

// Scroll Progress

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});



const toggle=document.querySelector(".theme-toggle");

toggle.onclick=()=>{

document.body.classList.toggle("light");

}



const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

}

});

/*==============================
PROJECT FILTER
==============================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

