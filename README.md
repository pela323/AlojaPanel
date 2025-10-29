# 🏨 Sistema de Precios - Alojamiento

Este proyecto muestra una **sección de precios dinámica** para un sitio web de alojamiento.  
Los precios se cargan automáticamente desde un archivo `precios.json`, lo que permite actualizarlos sin modificar el HTML.

---

## 📂 Estructura del proyecto

```
/proyecto-alojamiento/
│
├── index.html          → Página principal con las tarjetas de precios
├── precios.json        → Archivo con los valores de cada servicio
├── /css/
│   └── style.css       → Estilos principales del sitio
└── /js/ (opcional)
    └── script.js       → Código JavaScript (si se separa del HTML)
```

---

## ⚙️ Funcionamiento

### 🔹 1. Carga de precios
El archivo `index.html` utiliza `fetch()` para leer los valores desde `precios.json` y mostrarlos dinámicamente en la web.

```js
fetch("precios.json")
  .then(r => r.json())
  .then(data => {
    const contenedor = document.getElementById("lista-precios");
    contenedor.innerHTML = `
      <div class="card"><h3>Habitación 2 personas</h3><p>$${data.habitacion_2}</p></div>
      <div class="card"><h3>Habitación 3 personas</h3><p>$${data.habitacion_3}</p></div>
      <div class="card"><h3>Habitación 4 personas</h3><p>$${data.habitacion_4}</p></div>
      <div class="card"><h3>Habitación 5 personas</h3><p>$${data.habitacion_5}</p></div>
      <div class="card"><h3>Cochera</h3><p>$${data.cochera}</p></div>
      <div class="card"><h3>Mascotas</h3><p>$${data.mascotas}</p></div>
    `;
  });
```

---

### 🔹 2. Archivo `precios.json`
Contiene los valores actualizables de cada habitación o servicio:

```json
{
  "habitacion_2": 10000,
  "habitacion_3": 12000,
  "habitacion_4": 14000,
  "habitacion_5": 16000,
  "cochera": 2000,
  "mascotas": 1500
}
```

> 💡 Si se cambian estos valores y se recarga la página, los nuevos precios se mostrarán automáticamente.

---

## ⚠️ Error común: `fetch("precios.json")` no funciona

Si abrís el archivo directamente desde el explorador (`file:///E:/...`), verás un error como:

> Access to fetch at 'file:///...' from origin 'null' has been blocked by CORS policy

Esto sucede porque **`fetch()` no puede acceder a archivos locales por seguridad del navegador**.

---

## 🧠 Soluciones

### ✅ Opción 1: Usar un servidor local (recomendada)

#### 🔸 Con **VS Code (Live Server)**
1. Abrí el proyecto en VS Code.  
2. Clic derecho sobre `index.html`.  
3. Elegí **"Open with Live Server"**.  
4. El sitio se abrirá en `http://127.0.0.1:5500/`.

---

#### 🔸 Con **Python**
Si tenés Python instalado, ejecutá:
```bash
python -m http.server 5500
```
Luego abrí en tu navegador:
```
http://localhost:5500/
```

---

### 🧪 Opción 2: Usar datos directamente en el código (solo para pruebas)
Podés reemplazar el `fetch()` por un objeto local en JavaScript:
```js
const data = {
  habitacion_2: 10000,
  habitacion_3: 12000,
  habitacion_4: 14000,
  habitacion_5: 16000,
  cochera: 2000,
  mascotas: 1500
};
```
Esto evita errores, pero los datos no se actualizan desde el archivo.

---

## 🎨 Estilos

Colores utilizados en el sitio:

| Elemento     | Color     |
|---------------|-----------|
| Principal / Botones | `#c48f33` |
| Fondo         | `#ffffff` |
| Texto         | `#4c4c4c` |

**Fuente personalizada:**
```css
@font-face {
  font-family: "Lato";
  src: url("../fonts/Lato-Regular.ttf");
}
```

El diseño es **responsive**, adaptándose a móviles y pantallas grandes.

---

## 🔐 Próximas mejoras (Panel de administración)

Se está desarrollando un **panel de administración con login**, donde el administrador podrá:

- Iniciar sesión con usuario y contraseña.  
- Editar los precios desde un formulario visual.  
- Guardar los cambios automáticamente en `precios.json`.  
- Personalizar el panel con el logo de la empresa.  

---

## 💡 Autor
Desarrollado por **JG**  
Sitio: *(opcional)*  
GitHub: *(tu enlace si querés)*

---

## 🧩 Licencia
Este proyecto puede ser usado y modificado libremente con fines educativos o comerciales.  
Si lo reutilizás, por favor, da crédito al autor original 🙌
