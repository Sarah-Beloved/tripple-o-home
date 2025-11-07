document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sellForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);

    const propertyData = {
      fullName: formData.get("fullName"),
      title: formData.get("propertyTitle"),
      location: formData.get("propertyLocation"),
      price: formData.get("price"),
      images: formData.getAll("propertyImages")
    };

    console.log("Property submitted:", propertyData);

    alert("Your property has been submitted successfully!");
    form.reset();
  });
});
