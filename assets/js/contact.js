const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwqHF7KahVwGIDiSQSIX_6VPQVg5syk-BYu-y3xdVyKguZnJmvSxKlk7ZqWvRIgnm88/exec";
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
        if (window.turnstile) turnstile.reset();
      } else {
        showError(data.error || "Submission failed.");
      }
    })
    .catch(() => {
      showError("Network error. Please try again.");
    });
});
