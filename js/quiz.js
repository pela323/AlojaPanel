// ← Cuestionario final
export function iniciarQuiz() {
  const preguntas = [
    {
      texto: "¿Dónde se guardan los precios modificados?",
      opciones: ["En una base de datos", "En precios.json", "En admin.html"],
      correcta: 1
    },
    {
      texto: "¿Qué archivo procesa los datos del formulario?",
      opciones: ["guardar.php", "index.html", "login.html"],
      correcta: 0
    },
    {
      texto: "¿Qué lenguaje se usa para validar el login?",
      opciones: ["JavaScript", "PHP", "HTML"],
      correcta: 1
    },
    {
      texto: "¿Qué hace el archivo logout.php?",
      opciones: ["Guarda precios", "Elimina la sesión", "Abre el panel"],
      correcta: 1
    },
    {
      texto: "¿Cuál es el color principal del sitio?",
      opciones: ["#4c4c4c", "#c48f33", "#fff"],
      correcta: 1
    }
  ];

  let puntuacion = 0;
  const quiz = document.getElementById("quiz-content");
  preguntas.forEach((p, i) => {
    const div = document.createElement("div");
    div.classList.add("pregunta");
    div.innerHTML = `
      <p><b>${i + 1}.</b> ${p.texto}</p>
      ${p.opciones.map((op, j) => `
        <label><input type="radio" name="preg${i}" value="${j}"> ${op}</label><br>
      `).join("")}
    `;
    quiz.appendChild(div);
  });

  const btn = document.createElement("button");
  btn.textContent = "Corregir respuestas";
  btn.className = "btn-guardar";
  quiz.appendChild(btn);

  btn.addEventListener("click", () => {
    const respuestas = document.querySelectorAll("input[type='radio']:checked");
    respuestas.forEach(r => {
      const num = parseInt(r.name.replace("preg", ""));
      if (parseInt(r.value) === preguntas[num].correcta) {
        puntuacion++;
      }
    });

    const resultado = document.createElement("p");
    resultado.innerHTML = `<b>Puntuación: ${puntuacion}/5</b>`;
    resultado.style.color = puntuacion >= 4 ? "green" : "red";
    quiz.appendChild(resultado);

    if (puntuacion < 5) {
      const errores = preguntas
        .map((p, i) => {
          const resp = document.querySelector(`input[name='preg${i}']:checked`);
          if (!resp || parseInt(resp.value) !== p.correcta) {
            return `❌ ${i + 1}. ${p.texto} → Respuesta correcta: <b>${p.opciones[p.correcta]}</b>`;
          }
          return "";
        })
        .filter(Boolean)
        .join("<br>");
      const explicacion = document.createElement("div");
      explicacion.innerHTML = `<br><h4>Explicación de errores:</h4>${errores}`;
      quiz.appendChild(explicacion);
    }

    btn.disabled = true;
  });
}
