/*creamos este js para poder abrir las imágenes de la sección obras y cerrarlas de forma dinámica, en este caso se cierran las imágenes tras dar click en la imágen X
o tocando otra parte de la pantalla. Además el menú desparacere al abrir la imágen*/
const iconomenu1 = document.querySelector(".iconomenu") /*volvemos a poner iconomenu para que en esta nueva función no se vea por detrás*/
const imagenes = document.querySelectorAll(".img-obras") /*donde se encuentran nuestras imágenes*/
const imagenesLight = document.querySelector(".agregar-imagen")/*cambiamos su atributo src para que sea dinámico*/
const contenedorLight = document.querySelector(".image-light");/*contenedor de la imagen que cerrará*/

imagenes.forEach(imagen => {
	imagen.addEventListener("click", () => {
		aparecerImagen(imagen.getAttribute("src")); /*de esta manera ya obtenemos todos nuestros atributos src*/
	});
});

contenedorLight.addEventListener("click",(e)=>{
	if (e.target !== imagenesLight){ /*si e.target es diferente a imagenesLight, al contenedor light le agregará un toggle con clase mostrar*/
		contenedorLight.classList.toggle("mostrar")
		imagenesLight.classList.toggle("mostrarImagen")
		iconomenu1.style.opacity = "1";/*cuando se de click a cada una de las imágenes el iconomenu se ocultará*/
       }
});

const aparecerImagen = (imagen) => {/*ponemos imagen como parámetro*/
	imagenesLight.src = imagen;
	contenedorLight.classList.toggle("mostrar"); /*activaremos la clase mostrar al hacer click, la tenemos en el css y se transforma en 0*/
	imagenesLight.classList.toggle("mostrarImagen");/*la clase mostrarImagen va a transformarse y escalar en 1*/
	iconomenu1.style.opacity = "0";
}
