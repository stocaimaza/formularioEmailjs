//1) Lo primero que tenemos que hacer es inicializar el servicio de EmailJS

emailjs.init("x1NHSI8ohCpBpvwhR");

//2) Trabajamos con el formulario. 

const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    //Evitamos la recarga del formulario. 

    //Obtener los datos del formulario: 

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    console.log(nombre, email, mensaje);

    //Ejemplo de validacion: 
    if (!nombre || !email || !mensaje) {
        const error = document.createElement("div");
        error.innerText = "Por favor completa los datos";
        formulario.appendChild(error);
        return;
    }

    const correo =  {
        from_name: nombre,
        from_email: email, 
        message: mensaje
    }
    //No se olviden que las propiedades del objeto que enviamos deben tener estos nombres: from_name, from_email y message. 

    //Enviar los datos del formulario por medio de EmailJS
    emailjs.send("service_2y0j596", "template_83hea9e", correo).then(function (respuesta) {
        console.log("Datos enviados", respuesta.status);
        alert("Tu mensaje ha sido enviado");
    }, function (error) {
        console.log("Error al enviar los datos", error);
        alert("Ocurrio un error al enviar los datos");
    })
})