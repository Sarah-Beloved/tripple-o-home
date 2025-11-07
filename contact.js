document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "red";
      return;
    }

    // Show success message
    feedback.textContent = `Thanks, ${name}! Your message has been received. We'll reach out soon.`;
    feedback.style.color = "green";

    // Log to console (simulating sending to server)
    console.log("Contact form data:", { name, email, message });

    // Reset form
    form.reset();
  });
});
