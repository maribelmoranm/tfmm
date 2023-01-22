/*creamos este js para crear un menú desplegable, que pueda abrir y cerrarse de manera dinámica, además para cerrar nuestro menú se le dará click
a cualquier parte de la pantalla*/
const iconomenu = document.querySelector(".iconomenu"), /*contenedor de nuestro icono*/
        menu = document.querySelector(".menudesplegable"); /*contenedor del menú*/

iconomenu.addEventListener("click",() => { //al hacer click en menú aparecerá
    menu.classList.toggle("spread"); //añadimos esta funcion para poder añadir o quitar una clase, en este caso a la variable menú
    iconomenu.classList.toggle("spreadIcono");
})

//con la siguiente función conseguiremos que el menú desaparezca de nuevo al hacer click fuera de él, en la pantalla.

window.addEventListener("click", e => {
    if (menu.classList.contains("spread") && e.target !== menu && e.target !== iconomenu) {
        menu.classList.toggle("spread");
        iconomenu.classList.toggle("spreadIcono");

    }


})

