const bars = document.querySelector(".bar"),
    close = document.querySelector(".close"),
    menu = document.querySelector(".menu"),
    listItems = document.querySelectorAll(".crypto-ex ul li");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    });

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    });
});

close.addEventListener("click", () => {
    menu.classList.remove("active");
});

listItems.forEach((item) => {
    item.addEventListener("click", (event) => {

        event.preventDefault();

        listItems.forEach((item) => {
            item.style.color = "";
            item.style.borderStyle = "";
            item.style.borderColor = "";
            item.style.padding = "";
            item.style.borderRadius = "";
        });

        item.style.color = "var(--green-color)";
        item.style.borderStyle = "solid";
        item.style.borderColor = "var(--green-color)";
        item.style.padding = ".3rem 1rem";
        item.style.borderRadius = "2rem";
    });
});

function animateContentUp(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTriggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity: 1,
            ease: "power2.out",
            onStart: () => console.log(`Animating: ${boxSelector}`), 
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}

animateContentUp([".home .content h5, .home .content h1, .home .content h3, .home .content p, .home .content .email, .home .content .signup-btn, .home .home-box .content .pic2 img, .home .home-box .content .pic1 img"]);

scrollTriggerAnimation(".benefits", [".benefits .header-benefits", ".benefits .invest", ".benefits .security", ".benefits .customer"]);

scrollTriggerAnimation(".float-banner", [".float-banner"]);

scrollTriggerAnimation(".float-banner", [".float-banner .float-banner-btn"]);

scrollTriggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTriggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".assets", [".assets .heading-box", ".assets .content-box"]);

swipeAnimation(".assets", [".assets .content-box-1", ".assets .content-info", ".assets .number-instruction"]);

swipeAnimation(".assets", [".assets .buy-crypto"]);

swipeAnimation(".coin-market", [".coin-market .coin-market-heading", ".coin-market .view-coins"]);

swipeAnimation(".coin-market", [".coin-market .hot-list-data", ".coin-market .new-coins-data", ".coin-market .top-gainers-data"]);

swipeAnimation(".staking", [".staking .staking-heading", ".staking .rounded-square", ".staking .learn-more", ".staking .staking-section", ".staking .savings-section"]);

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"]);

galleryAnimation(".assets .crypto-ex ul", [".crypto-ex ul li"]);

galleryAnimation(".assets .gallery", [".assets .dashboard"]);

galleryAnimation(".featured .gallery", [".featured .gallery .box1", ".featured .gallery .box2", ".featured .gallery .box3", ".featured .gallery .box4"]);

galleryAnimation(".feedback .voices", [".feedback .voices .box1", ".feedback .voices .box2", ".feedback .voices .box3", ".feedback .voices .box4", ".feedback .voices .box5", ".feedback .voices .box6"]);


const floatBanner = document.querySelector(".float-banner img");
const floatBannerBtn = document.querySelector(".float-banner-btn");

function zoomIn() {
    gsap.to([floatBanner, floatBannerBtn], {
        scale: 1.01, 
    });
}


function zoomOut() {
    gsap.to([floatBanner, floatBannerBtn], {
        scale: 1, 
    });
}

floatBanner.addEventListener("mouseenter", zoomIn);
floatBanner.addEventListener("mouseleave", zoomOut);
floatBannerBtn.addEventListener("mouseenter", zoomIn);
floatBannerBtn.addEventListener("mouseleave", zoomOut);

