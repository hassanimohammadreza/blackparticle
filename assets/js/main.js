const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar-links');
const links = nav.querySelectorAll('a');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.classList.toggle('active');

  document.body.style.overflow =
    nav.classList.contains('active') ? 'hidden' : 'auto';
});

  links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    toggle.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});


let submitted = false;
  document.querySelector(".newsletter-form").addEventListener("submit", () => {
    setTimeout(() => {
      document.getElementById("thanks").style.display = "block";
    }, 500);
  });
