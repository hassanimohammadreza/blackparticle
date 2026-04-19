const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');
const links = nav.querySelectorAll('a');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.classList.toggle('active');

  document.body.style.overflow =
    nav.classList.contains('active') ? 'hidden' : 'auto';
});


let submitted = false;
  document.querySelector(".newsletter-form").addEventListener("submit", () => {
    setTimeout(() => {
      document.getElementById("thanks").style.display = "block";
    }, 500);
  });


document.querySelector('.nav-list').addEventListener('click', (e) => {
    const el = e.target.parentElement;

    if(el.classList[0] === 'nav-link') {
        el.nextElementSibling.classList.toggle('change');
        el.classList.toggle('change');
    };
});
