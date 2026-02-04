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


const form = document.getElementById("contactForm");
const formMessage = document.createElement("div");
formMessage.classList.add("form-message");
form.parentNode.insertBefore(formMessage, form.nextSibling);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  formMessage.textContent = "";
  formMessage.classList.remove("success", "error");

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbyoMLOlQs3BtRLkKs-m2XECblWf-IPwg8Na2JqWUtUP_K0AHYjWw7uXqfwtbeQ1kSq7/exec", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then(() => {
      formMessage.textContent = "Your message has been successfully sent.";
      formMessage.classList.add("success");
      form.reset();
    })
    .catch(() => {
      formMessage.textContent = "An error occurred while sending your message. Please try again.";
      formMessage.classList.add("error");
    });
});
