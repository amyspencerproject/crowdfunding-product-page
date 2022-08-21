const headerNav = document.querySelector("#header-nav");
const navHamburger = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".nav__x")
const navList = document.querySelector(".nav-list");
// const ariaExpanded = navHamburger.getAttribute("aria-expanded");

//first make a function to handle the toggle of the aria-expanded boolean
const handleHamburgerToggle = () => {
    const ariaExpanded = navHamburger.getAttribute("aria-expanded");

    if (ariaExpanded == "false") {
        //make nav list visible and set aria to true
        navHamburger.setAttribute("aria-expanded", "true");
        console.log("The function is working!!")
        navHamburger.classList.add("hide");
        navClose.classList.remove("hide");
    } else {
        navHamburger.setAttribute("aria-expanded", "false");
        console.log("The other part of function is working!!")
        navHamburger.classList.remove("hide");
        navClose.classList.add("hide");
    }
    console.log(ariaExpanded);
}

//then pass the toggle function thru the event listener
navHamburger.addEventListener("click", handleHamburgerToggle);

//pass same toggle function thru the event listener for the nav__x close button
navClose.addEventListener("click", handleHamburgerToggle);

