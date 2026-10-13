# Cuaderno de Frases

Entrenador de traducción español → inglés con pistas progresivas, audio, fonética IPA
y repetición espaciada. Es una única página web que funciona sola: no hay servidor,
no hay cuentas y nada de lo que escribes sale de tu dispositivo.

## Archivos de este repositorio

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La aplicación entera. Es el único archivo imprescindible. |
| `sw.js` | Permite que funcione sin conexión una vez abierta la primera vez. |
| `manifest.webmanifest` | Permite añadirla a la pantalla de inicio del móvil como una app. |
| `icono.png`, `icono-192.png` | El icono de esa app. |

## Formato de las listas de frases

Dos columnas separadas por tabulación, **sin fila de cabecera**. La primera en inglés
con la IPA entre paréntesis, la segunda en español.

```
Pen (pen) – I have a blue pen.	Boli – Tengo un boli azul.
Clock (klɒk) – The clock is on the wall.	Reloj (de pared) – El reloj está en la pared.
You look like your brother. (juː lʊk laɪk jɔː ˈbrʌðə)	Te pareces a tu hermano.
```

Reglas:

- En vocabulario, la raya `–` separa la palabra de la frase de ejemplo, en las dos columnas.
- Un paréntesis al final de la columna española es una aclaración que desambigua, como
  `Reloj (de pared)`. Se muestra en el enunciado pero no hay que escribirla.
- Se admiten `.tsv`, `.csv`, `.txt` y `.xlsx`. Las líneas que empiezan por `#` se ignoran.
- Si una entrada no tiene raya, se trata como frase suelta.

El mismo archivo se puede pegar directamente en Quizlet, o usar el botón de exportación
de la aplicación para elegir qué va en cada cara de la tarjeta.

## Cómo funciona el aprendizaje

- Se muestra la frase en español y la escribes en inglés, sin pistas.
- Si fallas, aparece la frase en huecos. Si vuelves a fallar, se destapan letras
  progresivamente hasta que aciertas.
- Al acertar entra la fase de consolidación: audio repetible, IPA con los sonidos
  difíciles marcados y bucle de *shadowing* para repetir en voz alta.
- El número de pistas que has necesitado es la nota. A la primera, la tarjeta sube de
  caja; con una pista se queda; con dos o más, baja.
- Las cajas se repasan a 1, 3, 7, 16, 35 y 90 días. Una tarjeta madura que falles baja
  dos cajas, no vuelve a cero.

## En el móvil

Es la misma aplicación y el mismo archivo: la pantalla se reorganiza sola cuando el
ancho baja de 700 px. En el móvil la navegación pasa a una barra fija abajo con iconos,
el campo de respuesta y el botón ocupan todo el ancho y quedan pegados a la parte
inferior de la tarjeta, justo encima del teclado, y la tarjeta se ajusta al alto real
de la pantalla.

Para instalarla como app: ábrela en Chrome y usa **Añadir a pantalla de inicio**. A
partir de ahí funciona sin conexión y sin barra del navegador.

## Copia de seguridad

Los archivos y el progreso se guardan en el navegador, por dispositivo. Desde **Ajustes**
puedes descargar una copia con todo y restaurarla en otro dispositivo o si limpias el
navegador. Hazlo de vez en cuando.
