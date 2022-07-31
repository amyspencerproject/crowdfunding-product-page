const headerNav = document.querySelector("#header-nav");
const navHamburger = document.querySelector(".header-nav-hamburger");
const navList = document.querySelector(".header-nav-list");
const testHover = document.querySelector(".about-description");


// navHamburger.addEventListener("mouseover", function (e) {
//     e.target.navHamburger.classList.add(".hide");
//     //when hovering hide the hamburger
//     // navHamburger.classList.add(".hide");
//     //and show the list
//     // navList.classList.remove("hide");
//     console.log("The event is working");
// });

testHover.addEventListener("mouseenter", (e) => {
    e.target.style.color("orange");
});
    
// Adding HTML code using Javascript is actually a simple “get target container and insert HTML” process:

// By directly changing or appending to the inner HTML.
// var target = document.getElementById("ID");
// target.innerHTML += "<p>CONTENTS</p>";
// By creating and inserting a new element.
// var newElement = document.createElement("p");
// newElement.innerHTML = "CONTENTS";
// document.getElementById("ID").appendChild(newElement);
