// ===== CARGAR PRECIOS EXISTENTES =====
fetch("precios.json")
  .then(r => r.json())
  .then(data => {
    for (let key in data) {
      const input = document.querySelector(`[name="${key}"]`);
      if (input) input.value = data[key];
    }
  });

// ===== GUARDAR CAMBIOS =====
document.getElementById("form-precios").addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  fetch("guardar.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(r => r.text())
  .then(msg => {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = msg;
    mensaje.style.color = "#c48f33";
  });
});

// ===== IMPORTAR CUESTIONARIO =====
import("./quiz.js").then(mod => mod.iniciarQuiz());
