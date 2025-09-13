// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("formStatus").innerText = "Thank you, " + name + "! Your message has been sent.";
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("formStatus").innerText = "Please fill all fields.";
  }
});