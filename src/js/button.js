var scrollToTopBtn = document.querySelector('.back-to-top');
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    // Show button
    scrollToTopBtn.classList.add('show');
  } else {
    // Hide button
    scrollToTopBtn.classList.remove('show');
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);
