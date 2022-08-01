const headerNav = document.querySelector("#header-nav");
const navHamburger = document.querySelector(".header-nav-hamburger");
const navList = document.querySelector(".header-nav-list");
const testHover = document.querySelector(".stat-info");

//Test for event handler with mouse
// testHover.addEventListener("mouseover", (e) => {
//     e.target.style.color="orange";
// });

navHamburger.addEventListener("mouseover", (e) => {
    navHamburger.style.display="none";
    navList.style.display="contents";
    console.log("The event is working");
    setTimeout(() => {
        navHamburger.style.display="contents";
        navList.style.display="none";
    }, 1000);
}, false);

