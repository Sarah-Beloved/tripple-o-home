document.addEventListener("DOMContentLoaded", () => {
  console.log("Consult.js connected!");

  const form = document.getElementById("consultForm");

  if (!form) {
    console.error("❌ Form not found! Make sure your form has id='consultForm'.");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const consultation = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    console.log("🗓️ Consultation request submitted:", consultation);
    alert("✅ Your consultation request has been sent successfully! We'll contact you soon.");

    form.reset();
  });
});
