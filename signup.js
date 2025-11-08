document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup successful! Token: " + data.token);
      window.location.href = "login.html"; // redirect to login
    } else {
      alert(data.msg || "Error signing up");
    }
  } catch (err) {
    console.error(err);
    alert("Server error!");
  }
});
