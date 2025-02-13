// banners hero sections
let currentIndex = 0;

        function showSlide(index) {
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slide').length;
            if (index >= totalSlides) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }
            slides.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        setInterval(nextSlide, 3000);



// bookscard
const slider = document.querySelector('.slide-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const cardWidth = document.querySelector('.card').offsetWidth + 20;
const totalCards = document.querySelectorAll('.card').length; 
const visibleCards = Math.floor(slider.clientWidth / cardWidth); 
let scrollAmount = 0; 

nextBtn.addEventListener('click', () => {
    scrollAmount += cardWidth * visibleCards; 

    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; 
    }

    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= cardWidth * visibleCards;

    if (scrollAmount < 0) {
        scrollAmount = slider.scrollWidth - slider.clientWidth; 
    }

    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// add to cart
document.addEventListener("DOMContentLoaded", function () {
  let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  updateCartNotification();

  document.querySelectorAll(".buy-btn").forEach((button) => {
      button.addEventListener("click", function () {
          let bookCard = this.closest(".cards");
          let bookTitle = bookCard.querySelector(".book-title").textContent;
          let bookPrice = bookCard.querySelector("p").innerHTML;
          let bookImage = bookCard.querySelector("img").src;

          let book = {
              title: bookTitle,
              price: bookPrice,
              image: bookImage,
          };

          cartItems.push(book);
          cartCount++;

          localStorage.setItem("cart", JSON.stringify(cartItems));
          localStorage.setItem("cartCount", cartCount);

          updateCartNotification();
          alert("Book added to cart!");
      });
  });

  function updateCartNotification() {
      const cartBadge = document.getElementById("cart-count");
      if (cartBadge) {
          cartBadge.textContent = cartItems.length;
      }
  }
});


// learn more div
function openPopup(popupId, overlayId) {
  document.getElementById(popupId).style.display = "block";
  document.getElementById(overlayId).style.display = "block"; 
}

function closePopup(popupId, overlayId) {
  document.getElementById(popupId).style.display = "none";
  document.getElementById(overlayId).style.display = "none"; 
}

document.addEventListener("DOMContentLoaded", function () {
    let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    updateCartNotification();

    document.querySelectorAll(".buy-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let bookCard = this.closest(".card");
            let bookTitle = bookCard.querySelector(".book-title").textContent;
            let bookPrice = bookCard.querySelector("p").innerHTML;
            let bookImage = bookCard.querySelector("img").src;

            let book = {
                title: bookTitle,
                price: bookPrice,
                image: bookImage,
            };

            cartItems.push(book);
            cartCount++;

            localStorage.setItem("cart", JSON.stringify(cartItems));
            localStorage.setItem("cartCount", cartCount);

            updateCartNotification();
            alert("Book added to cart!");
        });
    });

    function updateCartNotification() {
        const cartBadge = document.getElementById("cart-count");
        if (cartBadge) {
            cartBadge.textContent = cartItems.length;
        }
    }
});





// Search bar functionality (Home Page)
document.getElementById("searchicon").addEventListener("click", function () {
    let searchQuery = document.querySelector(".searchbar").value.trim().toLowerCase();
    if (searchQuery) {
        window.location.href = `top seller.html?search=${encodeURIComponent(searchQuery)}`;
    }
});

document.querySelector(".searchbar").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("searchicon").click();
    }
});



document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-items").classList.toggle("active");
});
