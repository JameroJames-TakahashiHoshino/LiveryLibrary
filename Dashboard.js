document.getElementById('dropdown-toggle').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Optional: Close dropdown if clicking outside
window.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown-menu');
    if (!event.target.matches('#dropdown-toggle') && dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    }
}
)
;

// Get the notification icon and dropdown menu elements
const notificationIcon = document.querySelector('.notification-icon');
const dropdownMenu = document.querySelector('.dropdown-notif');

// Add an event listener to the notification icon
notificationIcon.addEventListener('click', (event) => {
    // Prevent the click event from propagating to the document
    event.stopPropagation(); 
    // Toggle the display of the dropdown menu
    dropdownMenu.classList.toggle('show');
});

// Close the dropdown if clicked outside
document.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.banner__title');

  
    title.addEventListener('click', function() {
      // Toggle underline class on click
      this.classList.toggle('underline-active');
    });
  });

  const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;

function showCarouselItem(index) {
    carouselItems.forEach((item) => {
        item.classList.remove('active');
    });
    carouselItems[index].classList.add('active');
}

function prevCarouselItem() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentIndex);
}

function nextCarouselItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
}

prevButton.addEventListener('click', prevCarouselItem);
nextButton.addEventListener('click', nextCarouselItem);

// Show the first carousel item by default
showCarouselItem(currentIndex);