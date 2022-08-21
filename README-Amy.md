# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Links

- Solution URL: [Github Repo](https://github.com/amyspencerproject/crowdfunding-product-page)
- Live Site URL: [live site](https://amyspencerproject.github.io/crowdfunding-product-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JS

### What I learned

- Always put a type on your `<button>` elements.
- Make sure your alt descritions for images/icons used for an action say what the action does e.g. alt="bookmark" not alt="bookmark icon"
- Do not use `<br/>` because screen readers say break out loud and that is annoying
- do not use an empty div with a border to make decorative line. User borders on existing elements
- Use aria-expanded for menu toggle functions. Like a hamburger icon that toggles to a navigation menu
- the close button must be part of the modal otherwise you can not access it to close the modal

### Continued development

Having a hell of a time with the hover mouseover event that changes the hamburger nav icon into a nav list w/ links. I got the hover change to occur but the hamberger loses placement styling upon returning to UI.

### Useful resources

- [Modals](https://www.w3schools.com/howto/howto_css_modals.asp) - This is where I learned how to make a modal
- [Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp) - This is where I learned about pseudo-elements
- [Navigation-toggle](https://jsfiddle.net/hackermart/9Loe5u38/19/) - Code from another Frontend Mentor collegue that I used to understand the aria-expanded toggle for the navigation menu.

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
