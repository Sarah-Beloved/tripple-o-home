document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("filterForm");
  const searchInput = form.querySelector("input[type='text']");
  const typeSelect = form.querySelectorAll("select")[0];
  const statusSelect = form.querySelectorAll("select")[1];
  const properties = document.querySelectorAll(".property");

  // Handle filtering
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop form from refreshing the page

    const search = searchInput.value.toLowerCase();
    const type = typeSelect.value;
    const status = statusSelect.value;

    properties.forEach((property) => {
      const text = property.innerText.toLowerCase();
      const matchesSearch = text.includes(search);
      const matchesType = type ? text.includes(type) : true;
      const matchesStatus = status ? text.includes(status) : true;

      if (matchesSearch && matchesType && matchesStatus) {
        property.style.display = "block";
      } else {
        property.style.display = "none";
      }
    });
  });
});
