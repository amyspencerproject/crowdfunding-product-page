const headerNav = document.querySelector("#header-nav");
const navHamburger = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".nav__close")
const navList = document.querySelector(".nav-list");
const navModal = document.querySelector("#nav-modal")
// const ariaExpanded = navHamburger.getAttribute("aria-expanded");

//first make a function to handle the toggle of the aria-expanded boolean
const handleHamburgerToggle = () => {
    const ariaExpanded = navHamburger.getAttribute("aria-expanded");

    if (ariaExpanded == "false") {
        //make nav modal visible and set aria to true
        navHamburger.setAttribute("aria-expanded", "true");
        console.log("The function is working!!")
        navHamburger.classList.add("hide");
        // navModal.classList.remove("hide");
        navModal.style.display = "block";

    } else {
        navHamburger.setAttribute("aria-expanded", "false");
        console.log("The other part of function is working!!")
        navHamburger.classList.remove("hide");
        // navClose.classList.add("hide");
       
    }
    console.log(ariaExpanded);
}

//then pass the toggle function thru the event listener 
navHamburger.addEventListener("click", handleHamburgerToggle);

// pass same toggle function thru the event listener for the nav__close button
navClose.addEventListener("click", handleHamburgerToggle);

// using a 2nd event listener for nav__close button to remove modal
// need to combine with 1st
navClose.addEventListener("click", function(e) {
    navModal.style.display = "none";
    // handleHamburgerToggle
});




