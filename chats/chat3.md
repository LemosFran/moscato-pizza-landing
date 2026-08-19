# Arreglar layout mobile

_Started 2026-08-15 03:29 UTC_

---

## User

Continuing from "SVG components section".

## Assistant

Estamos refinando la landing page maximalista de Moscato Pizza (pizzería + pastas en Casilda, Santa Fe). Estructura retro scrapbook con polaroids, collages asimétricos, tipografía condensada en mayúsculas, anotaciones manuscritas y paleta navy, crema, mostaza, rojo y verde.

Estado actual: página completa con hero collage, menú con tarjetas PIZZA/PASTA, chef letter, food truck, dos locales (Il Piccolo + la sucursal provincial), y testimonios en notas manuscritas sobre fondo #ECE6E1 con borde #C1C1C6. Sección "Cómo funciona" con cuatro tickets vintage desplegándose left-to-right animados por scroll (sticky 100vh), pizza semicircular cortada a la mitad en el borde inferior, y tres bandas horizontales navy que se extienden 12% fuera del viewport. Lettering bordado del hero con contorno celeste 19px + relleno navy 12px (sin blur intermedio).

Decisiones clave: navbar sticky con paneles flotantes, hero con foto del truck a sangre y collage en borde inferior, medallón giratorio en menú, lettering con efecto puntada doble trazo, testimonios con Awesome Serif Italic navy, y despliegue de tarjetas vinculado al scroll (7% retardo entre capas, 55% duración, primeras tarjetas al frente).

Pendientes: placeholders de trucks y fachadas de locales requieren fotos reales (tres trucks + una pasta, dos fachadas).

Archivos: Moscato Landing.html, sections-top.jsx, sections-bottom.jsx, nav.jsx, nav.css, assets/*.png (logo, hero-plaque-v2, how-medallion).

## User

quiero que arregles y organices el layout en versión mobile, quedaron muchas cosas fuera de lugar

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: show_to_user]_

_[tool: screenshot_user_view]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

Layout mobile reordenado (verificado a 360, 390, 430 y 768px — cero desbordes horizontales):

- **Nav**: ahora dos paneles (logo + "Menú"); el logo ya no se pisaba con Contacto. Contacto pasó al desplegable, en mostaza.
- **Historia**: la carta del chef se achicaba mal (quedaba 520px fija, medio fuera de pantalla) → ahora es fluida; el collage escala y se centra por pasos.
- **Hero**: polaroid y lettering bordado reescalados dentro del bloque, medallón reposicionado.
- **Cómo funciona**: los tickets se apilan a ancho completo desde 900px (antes se encogían al 52% en tablet).
- **Menú**: el arco y la pizza dejaron de solaparse con las tarjetas Pizza/Pasta, que ahora fluyen debajo a ancho completo.
- **Trucks, testimonios, locales y footer**: títulos, paddings y botones ajustados a 18px de margen lateral y CTAs full-width.

## User

Found issues — fixing…

## User

Found issues — fixing…

## User

quita ese borde azul bajo la tarjeta

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Listo — sombra quitada bajo las tarjetas Pizza/Pasta en mobile. (Los avisos del validador son falsos positivos: el lettering con puntada y la pizza semicircular recortada son intencionales.)

