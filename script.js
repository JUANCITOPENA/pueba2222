document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recargar la página

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Validación simple
  if (username === "juancito" && password === "123456") {
    message.style.color = "blue";
    message.textContent = "✅ Login exitoso. Bienvenido Juancito!";
  } else {
    message.style.color = "yellow";
    message.textContent = "❌ Usuario o contraseña incorrectos.";
  }
});
