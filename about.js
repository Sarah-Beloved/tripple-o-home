document.addEventListener("DOMContentLoaded", () => {
  console.log("About.js connected!");

  // Simple greeting animation when the page loads
  const heading = document.querySelector("h2");
  heading.style.opacity = "0";
  heading.style.transition = "opacity 1.5s ease-in-out";

  setTimeout(() => {
    heading.style.opacity = "1";
  }, 300);

  // Fun dynamic message for visitors
  const footer = document.querySelector("footer");
  const message = document.createElement("p");
  message.textContent = "✨ Thank you for learning more about us. We’re excited to help you find your dream home!";
  message.style.marginTop = "10px";
  message.style.fontStyle = "italic";
  message.style.color = "#333";
  footer.appendChild(message);
});
