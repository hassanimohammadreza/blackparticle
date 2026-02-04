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

  const tokenInput = document.querySelector(
    'input[name="cf-turnstile-response"]'
  );

  if (!tokenInput || !tokenInput.value) {
    showError("Please verify you are human.");
    return;
  }

  const formData = new FormData(form);
  formData.append("cf-turnstile-response", tokenInput.value);

  fetch(SCRIPT_URL, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        showSuccess("Your message has been sent.");
        form.reset();
      } else {
        showError(data.error || "Submission failed.");
      }
    })
    .catch(() => {
      showError("Network error. Please try again.");
    });
});
