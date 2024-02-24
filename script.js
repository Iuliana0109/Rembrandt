window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var hero = document.querySelector('.hero');
    var heroHeight = hero.offsetHeight;
    var scrollPosition = window.scrollY + (window.innerHeight / 2); // Scroll position at the center of the viewport
  
    if (scrollPosition > hero.offsetTop && scrollPosition < (hero.offsetTop + heroHeight)) {
      navbar.style.backgroundColor = '#120602'; // Change to desired background color
    } else {
      navbar.style.backgroundColor = 'transparent'; // Back to transparent when not in the hero section
    }
  });
  