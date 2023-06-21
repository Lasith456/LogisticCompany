'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/**
 * Contact
 */
document.getElementById('contact_form').addEventListener('submit', function(event) {
  event.preventDefault();
  sendEmail();
});
function sendEmail() {
  var recipient = "lcviduranga456@gmail.com";
  var name = document.getElementById('firstName').value;
  var name1 = document.getElementById('lastName').value;
  var tp = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('msg').value;
  var subject = 'New contact form submission from ' + name;
  var body = 'Name: ' + name + name1 + '%0D%0AEmail: ' + email + '%0D%0AMessage: ' + message+ '%0D%0AMobilenumber: ' + tp;

      
        window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
      }
