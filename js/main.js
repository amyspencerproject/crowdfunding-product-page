const headerNav = document.querySelector("#header-nav");
const navHamburger = document.querySelector(".header-nav-hamburger");
const navList = document.querySelector(".header-nav-list");
const testHover = document.querySelector(".stat-info");

//Test for event handler with mouse
// testHover.addEventListener("mouseover", (e) => {
//     e.target.style.color="orange";
// });

// navHamburger.addEventListener("click", () => {
//     navHamburger.style.display="none";
//     navList.style.display="contents";
//     console.log("The event is working");
// });

navHamburger.addEventListener("click", () => {
    if(navHamburger.hasAttribute("aria-expanded = false")) {
        navHamburger.style.display="none";
        navList.style.display="contents";
        console.log("The event is working");  
    } else {
        console.log("Blah!");
    }
    
});