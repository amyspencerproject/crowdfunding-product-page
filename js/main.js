const headerNav = document.querySelector("#header-nav");
const navHamburger = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav-list");
// const ariaExpanded = navHamburger.getAttribute("aria-expanded");

//first make a function to handle the toggle of the aria-expanded boolean
const handleHamburgerToggle = () => {
    const ariaExpanded = navHamburger.getAttribute("aria-expanded");

    if (ariaExpanded == "false") {
        //make nav list visible and set aria to true
        navHamburger.setAttribute("aria-expanded", "true");
        console.log("The function is working!!")
    } else {
        navHamburger.setAttribute("aria-expanded", "false");
        console.log("The other part of function is working!!")
    }
    console.log(ariaExpanded);
}

//then pass the toggle function thru the event listener
navHamburger.addEventListener("click", handleHamburgerToggle);

