/* ==========================================================
   J S PUBLIC SCHOOL
   Premium Main JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================================
       Sticky Header Shadow
    ============================================ */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.style.boxShadow = "0 12px 30px rgba(0,0,0,.10)";

        } else {

            header.style.boxShadow = "0 3px 15px rgba(0,0,0,.05)";

        }

    });


    /* ============================================
       Scroll To Top Button
    ============================================ */

    const scrollBtn = document.getElementById("scrollTop");

    if (scrollBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                scrollBtn.style.display = "flex";

            } else {

                scrollBtn.style.display = "none";

            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* ============================================
       Active Navigation
    ============================================ */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });


    /* ============================================
       Counter Animation
    ============================================ */

    const counters = document.querySelectorAll(".stat-card h2");

    let counterStarted = false;

    function runCounters() {

        if (counterStarted) return;

        const statsSection = document.querySelector(".statistics");

        if (!statsSection) return;

        const top = statsSection.getBoundingClientRect().top;

        if (top > window.innerHeight - 100) return;

        counterStarted = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text.replace(/\D/g, ""));

            const suffix = text.replace(/[0-9]/g, "");

            let value = 0;

            const speed = Math.max(15, Math.floor(2000 / number));

            const timer = setInterval(() => {

                value++;

                counter.innerText = value + suffix;

                if (value >= number) {

                    counter.innerText = number + suffix;

                    clearInterval(timer);

                }

            }, speed);

        });

    }

    window.addEventListener("scroll", runCounters);

    runCounters();


    /* ============================================
       Hero Fade Animation
    ============================================ */

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.animate(

            [

                {

                    opacity: 0,

                    transform: "translateY(50px)"

                },

                {

                    opacity: 1,

                    transform: "translateY(0)"

                }

            ],

            {

                duration: 1200,

                easing: "ease-out",

                fill: "forwards"

            }

        );

    }


    /* ============================================
       Facility Hover Effect
    ============================================ */

    document.querySelectorAll(".facility-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });


    /* ============================================
       Leadership Hover Effect
    ============================================ */

    document.querySelectorAll(".leader-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });


    /* ============================================
       Gallery Image Zoom
    ============================================ */

    document.querySelectorAll(".gallery-grid img").forEach(image => {

        image.addEventListener("click", () => {

            const overlay = document.createElement("div");

            overlay.style.position = "fixed";

            overlay.style.left = "0";

            overlay.style.top = "0";

            overlay.style.width = "100%";

            overlay.style.height = "100%";

            overlay.style.background = "rgba(0,0,0,.9)";

            overlay.style.display = "flex";

            overlay.style.justifyContent = "center";

            overlay.style.alignItems = "center";

            overlay.style.cursor = "zoom-out";

            overlay.style.zIndex = "9999";

            const img = document.createElement("img");

            img.src = image.src;

            img.style.maxWidth = "90%";

            img.style.maxHeight = "90%";

            img.style.borderRadius = "15px";

            img.style.boxShadow = "0 20px 60px rgba(0,0,0,.4)";

            overlay.appendChild(img);

            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => {

                overlay.remove();

            });

        });

    });


    /* ============================================
       Reveal Sections
    ============================================ */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        section.style.opacity = "0";

        section.style.transform = "translateY(40px)";

        section.style.transition = "all .8s ease";

        observer.observe(section);

    });

});