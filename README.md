# Proyecto programación con React Equipo 7 - Memorama

## Planteamiento del proyecto
Nuestro proyecto es un memorama que sera para dos jugadores. Planes a futuro es el contar con una especie de sistema de estadisticas montado en un servidor del cual es puedan hacer peticiones y que estas sean representadas de forma grafica en el navegador. Por ahora, hicimos la estructura basica de lo que seran los futuros componentes.

## Componentes y funciones helpers

### App
![](https://raw.githubusercontent.com/alejandro28100/memo/main/src/readmeimages/app.jpg)

En el App.js se renderizan las tarjetas desde el array cards,estas tarjetas son hijos de Board para que se les aplique el estilo.

### Board
![](https://raw.githubusercontent.com/alejandro28100/memo/main/src/readmeimages/board.jpg)

Board component que recibe hijos, es para poder estilizar el tablero.

### Card

![](https://raw.githubusercontent.com/alejandro28100/memo/main/src/readmeimages/card.jpg)

Componente card que representa cada tarjeta, recibe por props la url de una imagen, una id única, la propiedad flipped (si esta volteada la tarjeta el valor es true ) y la funcion handleSelectCard para cambiar la propiedad flipped desde el estado que viene de App.

### Funciones helpers

![](https://raw.githubusercontent.com/alejandro28100/memo/main/src/readmeimages/helpers.jpg)

El array cards es generado en varios pasos. Primero se inicia con un array de url de las imagenes del juego (en este caso son 6 urls). Despues duplico el contenido del array para obtener 12 url (para que haya 2 imagenes por url). Luego, transformo cada entrada ( la url que es un string) en un objeto con las propiedades que se van a usar (url, id y flipped). Despues en el array resultante del paso anterior se busca el id del par correspondiente de cada imagen.Como las imagenes mantienen el mismo orden aun cuando son duplicadas en el segundo paso, solo hay que saber el numero total de imagenes originales (6) para saber si la tarjeta es parte del grupo original o no. Si el index es menor que 5 quiere decir que pertenece al grupo original así que si le sumamos la cantidad total 6 nos llevará al objeto correspondiente en el segundo grupo.Después solo se le asigna la prop pairID con valor del id del par que le corresponde
