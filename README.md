# Frontend Mentor - E-commerce product page solution

**!!! This site is optimized for 1440x900 resolution on PC.**

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

**Mobile Size**  
![Mobile version](https://github.com/DrunkenNeoguri/ecommerceproductpagechallenge/blob/main/media/active_mobile.gif?raw=true)

**PC Browser Size**
![PC Browser version](https://github.com/DrunkenNeoguri/ecommerceproductpagechallenge/blob/main/media/active_pc.gif?raw=true)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/16th-challenge-article-preview-with-react-and-recoil-F7AW62PU4K](https://www.frontendmentor.io/solutions/16th-challenge-article-preview-with-react-and-recoil-F7AW62PU4K)
- Live Site URL: [https://drunkenneoguri.github.io/ecommerceproductpagechallenge/](https://drunkenneoguri.github.io/ecommerceproductpagechallenge/)

## My process

### Built with

- HTML5
- CSS3
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Recoil](https://recoiljs.org//) - React framework

### What I learned

- [How To Change svg properties in React Component](https://vaadarsh8178.medium.com/handling-custom-svgs-in-react-using-styled-components-30d2739ff4cb)
- [Getting Started to Recoil](https://recoiljs.org/docs/introduction/getting-started)

### Continued or Hoped development

- make order and other menu item list page
- maintain cart data when user use to refresh
- make user profile page
- more interactive feature animation

### Useful resources

- [Array.prototype.findIndex()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Number.prototype.toFixed()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

## Author

- github - [@develop_neoguri](https://github.com/DrunkenNeoguri)
- Frontend Mentor - [@drunken_neoguri](https://www.frontendmentor.io/profile/DrunkenNeoguri)
- Twitter - [@develop_neoguri](https://www.twitter.com/develop_neoguri)

## Acknowledgments

It's been a while since I participated in a challenge.  
Previously, I used only Pure JS to write code, but now I have studied React, so I wrote the code in React to review it.

As I was writing, I realized the importance of global state management once again, and I tried Recoil,  
which I wanted to learn, rather than Redux, which I used to use well.

The advantage of recoils, in my opinion, is that they are definitely 'accustomed'.

Once you understand the concept of useState in React, learning this library is very easy.  
And you don't even have to write complex code like Redux.
All you need is atoms and hooks.

If Recoil is only used within the client, then Recoil is definitely a good library.  
However, Recoil may not be a good option if the values received through APIs such as servers are applied to state management.

Since Recoil does not have the functions of middleware like Redux's thunk, you will need another library to act as a middleware separately.  
It was nice to have a chance to try Recoil in a little bit at this opportunity.

Of course, the experience of writing code in a different way using React was fresh compared to when I was in Pure JS.  
It was also difficult because it was difficult. ^^;;
Still, as I worked hard for 3 days, it was fun! 😊
