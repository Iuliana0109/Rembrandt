window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var hero = document.querySelector('.hero');
  var heroHeight = hero.offsetHeight;
  var scrollPosition = window.scrollY + (window.innerHeight / 2)+180; // Scroll position at the center of the viewport
  var heroTop = hero.offsetTop;
  var heroBottom = heroTop + heroHeight;

  if (scrollPosition > heroBottom || scrollPosition < heroTop) {
    navbar.style.backgroundColor = '#120602'; // Transparent background when outside the hero section
  } else {
    navbar.style.backgroundColor = 'transparent'; // Change to desired background color when inside the hero section
  }
});
