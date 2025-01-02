// Dark Mode Toggle Functionality
const darkModeCheckbox = document.getElementById("darkModeCheckbox");

darkModeCheckbox.addEventListener("change", function() {
  if (darkModeCheckbox.checked) {
    document.body.classList.add("dark-mode");console.log("Dark mode checkbox changed");// Dark Mode Toggle Functionality
const darkModeCheckbox = document.getElementById("darkModeCheckbox");

darkModeCheckbox.addEventListener("change", function() {
  document.body.classList.toggle("dark-mode", darkModeCheckbox.checked);
  console.log(`Dark mode checkbox changed to ${darkModeCheckbox.checked}`);
});

// Contact Form Submission (Example)
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name && email && message) {
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Optionally, you could use an API here to send the form data
    alert("Thank you for reaching out! I will get back to you soon.");
  } else {
    alert("Please fill out all fields.");
  }
});
  } else {
    document.body.classList.remove("dark-mode");
  }
});

// Contact Form Submission (Example)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Optionally, you could use an API here to send the form data
  alert("Thank you for reaching out! I will get back to you soon.");
});
