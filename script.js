function mostrarMensaje(){
    alert("¡Bienvenido a Raíces de Japón!");
}

function cambiarTexto() {
    let texto = document.getElementById("texto");
    if (texto) { 
      texto.innerHTML="Explora tradiciones, festivales y gastronomía de Japón";
}
}

window.onload = function (){

    //fecha automática

    let hoy = new Date();
    let fecha = document.getElementById("fecha");
    if (fecha) {
      fecha.innerHTML= "fecha actual:" + hoy.toLocaleDateString();
}

    //Mensaje según la página

    let pagina =window.location.pathname;
    let mensaje = "";
    if (pagina.includes("index.html") || pagina === "/") { 
        mensaje = "Bienvenido a Raíces de Japón";
    }
    else if (pagina.includes("festivales.html")) {
        mensaje = "Descubre los festivales tradicionales de Japón";
    }
    else if (pagina.includes("gastronomia.html")) {
        mensaje = "Explora la gastronomía japonesa";
    }
    else if (pagina.includes("tradiciones.html")) {
        mensaje = "Conoce las tradiciones de Japón";
    }
    let elemento = document.getElementById("mensajePagina");
    if (elemento) { 
        elemento.innerHTML = mensaje;
    }
}

    let imagenes = [
    "imagen/monte-fuji.jpg",
    "imagen/templo.jpg",
    "imagen/cultura-japonesa.png"
];

    let indice = 0;

    function mostrarImagen () {
        document.getElementById("imagenSlider").src = imagenes[indice];
    }

    function siguiente(){
        indice = (indice + 1) % imagenes.length;
        mostrarImagen();
    }

    function anterior () {
        indice=(indice -1 + imagenes.length) % imagenes.length;
        mostrarImagen();
    }

    //automático
    setInterval(siguiente,3000);

    let form = document.getElementById("formulario");

if (form) {
    form.addEventListener("submit", function(e) {

        e.preventDefault(); // evita envío automático

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        let error = document.getElementById("mensajeError");
        let exito = document.getElementById("mensajeExito");

        error.innerHTML = "";
        exito.innerHTML = "";

        // VALIDACIONES
        if (nombre === "" || correo === "" || mensaje === "") {
            error.innerHTML = "Todos los campos son obligatorios";
            return;
        }

        if (!correo.includes("@") || !correo.includes(".")) {
            error.innerHTML = "Correo no válido";
            return;
        }

        // SI TODO ESTÁ BIEN
        exito.innerHTML = "Formulario enviado correctamente 🎉";

        form.reset();
    });
}
