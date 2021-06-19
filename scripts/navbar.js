// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var app = new Vue({
    el: 'ul',
    data: {
        page1: 'Home',
        page2: 'Interests',
        page3: 'Resume',
        page4: 'Course Work',
        page5: 'Photo Gallery',
        page6: 'Contact Me'
    }
})
