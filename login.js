document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful! Token: " + data.token);
      // store token in localStorage/sessionStorage if needed
      localStorage.setItem("authToken", data.token);
      window.location.href = "index.html"; // redirect to home
    } else {
      alert(data.msg || "Invalid credentials");
    }
  } catch (err) {
    console.error(err);
    alert("Server error!");
  }
});
