// NAVBAR STUFF


document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('menu-open');
});


// CAROUSEL
// const track = document.querySelector('.carousel');
// const items = document.querySelectorAll('.card');
// const dots = document.querySelectorAll('.dot');

// let index = 0;
// let isTransitioning = false;

// function updateCarousel() {
//   track.style.transition = isTransitioning ? 'transform 0.5s ease' : 'none';
//   track.style.transform = `translateX(-${index * 33}%)`;
//   dots.forEach((dot, i) => {
//     dot.classList.toggle('active', i === index % items.length);
//   });
// }

// function nextSlide() {
//   if (!isTransitioning) {
//     isTransitioning = true;
//     const nextIndex = (index + 1) % items.length;
//     if (nextIndex === 0) {
//       // If transitioning from last slide to first slide, skip the transition
//       track.style.transition = 'none';
//       track.style.transform = 'translateX(0)';
//       setTimeout(() => {
//         isTransitioning = false;
//         track.style.transition = 'transform 0.5s ease'; // Restore transition for next slide
//         index = nextIndex;
//         updateCarousel();
//       }, 50);
//     } else {
//       track.style.transition = 'transform 0.5s ease';
//       index = nextIndex;
//       updateCarousel();
//       setTimeout(() => {
//         isTransitioning = false;
//       }, 500);
//     }
//   }
// }
// function prevSlide() {
//   if (!isTransitioning) {
//     isTransitioning = true;
//     index = (index - 1 + items.length) % items.length;
//     updateCarousel();
//     setTimeout(() => {
//       isTransitioning = false;
//     }, 500);
//   }
// }

// setInterval(nextSlide, 3000); // Auto-scroll every 3 seconds

// MASCOT HANDLING
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("mascot-container").classList.add("show-mascot");
  }, 5000); // Delay in milliseconds (2 seconds in this example)
});


