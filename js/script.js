//===== Back to top =====//
//Get the button
let mybutton = document.querySelector(".back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search-icon').addEventListener('click', function(event) {
    event.preventDefault();
    var searchBar = document.getElementById('search-bar');
    var overlay = document.getElementById('overlay');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
      searchBar.style.display = 'block';
      overlay.style.display = 'block';
    } else {
      searchBar.style.display = 'none';
      overlay.style.display = 'none';
    }
  });

  document.getElementById('close-search').addEventListener('click', function() {
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  });

  document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var togglePasswordElements = document.querySelectorAll(".toggle-password");

  togglePasswordElements.forEach(function(togglePasswordElement) {
      togglePasswordElement.addEventListener("click", function() {
          // Toggle the icon classes
          togglePasswordElement.classList.toggle("fa-eye");
          togglePasswordElement.classList.toggle("fa-eye-slash");

          // Find the associated input field
          var input = togglePasswordElement.parentElement.querySelector("input");

          // Toggle the input field type between password and text
          if (input.type === "password") {
              input.type = "text";
          } else {
              input.type = "password";
          }
      });
  });
});

const inputWrappers = document.querySelectorAll('.input-wrapper-two');

inputWrappers.forEach(inputWrapper => {
  const incrementButton = inputWrapper.querySelector('.increment');
  const decrementButton = inputWrapper.querySelector('.decrement');
  const quantityInput = inputWrapper.querySelector('.quantity');

  incrementButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  decrementButton.addEventListener("click", () => {
    if (parseInt(quantityInput.value) > 0) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });
});

// Animation on scroll function
function initAOS() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}

window.addEventListener("load", () => {
  initAOS();
});

AOS.init(); 

$(document).ready(function(){
  $('.loader').show();

  setTimeout(function(){
    $('.loader').fadeOut();
  }, 2000); 
});
// script.js

function updatePrice() {
  const priceRange = document.getElementById('price-range');
  const minPrice = document.getElementById('min-price');
  const maxPrice = document.getElementById('max-price');

  minPrice.textContent = priceRange.min + ' BHD';
  maxPrice.textContent = priceRange.max + ' BHD';
}

// Initial call to set the price values
updatePrice();



