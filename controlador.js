//Traigo una etiqueta del html
let titulo=document.getElementById("titulo")


//Controlando etiquetas
//1. cambiar el texto de una etiqueta aplica para H1.....,P,A

//textContent me sirven para darle un nuevo valor a la etiqueta de html 
titulo.textContent="Welcome to the cesde"

//2. Cambiar la imagen ( o la fuente (video-audio(recurso grafico)) )
//dentro de la variable foto esta guardada una etiqueta que contiene una foto
let foto=document.getElementById("foto")
//Copiar direccion de imagen( para copiar la imagen desde internet)
//con el src cambio una fuente 
foto.src="https://edukame.com/sites/default/files/styles/articulo_completo/public/tranquilidad.jpg"

//modificar estilos desde javaScript 
//para modificar estilos debo quitar o agregar clases

//3.agregando estilos
//classList propiedad para cambiar estilos (entre comillas pongo la clase que cree)
//add, seria para agregar ese estilo
titulo.classList.add("letra")

//4.Detectando Eventos
let boton=document.getElementById("boton")
//palabra para escuchar el click  (addEventListener), el evento va siempre entre comillas
//Los eventos disparan funciones 
boton.addEventListener("click",function(){
    console.log("Hice clic")
})

