(function () {
  let lastScrollTop = 0;
  const header = document.querySelector('.profile'); 
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      header.classList.remove('nav-up');
      header.classList.add('nav-down');
    } else {
      // Scrolling up
      header.classList.remove('nav-down');
      header.classList.add('nav-up');
    }
    
    lastScrollTop = scrollTop;
  });
})();
