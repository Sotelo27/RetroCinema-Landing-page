let retroFormulario = document
let nombre = retroFormulario.getElementById("input-nombre")
let apellido = retroFormulario.getElementById("input-apellido")
let email = retroFormulario.getElementById("input-email")
let telefono = retroFormulario.getElementById("input-telefono")
let provincia = retroFormulario.getElementById("input-provincia")
let ciudad = retroFormulario.getElementById("input-ciudad")
let pEmail = retroFormulario.getElementById("p-email")
let pApellido = retroFormulario.getElementById("p-ape")
let pNombre = retroFormulario.getElementById("p-name") /*spans*/ 
let pCiudad = retroFormulario.getElementById("p-ciudad")
let pProvincia = retroFormulario.getElementById("p-provincia")
let pTelefono = retroFormulario.getElementById("p-telefono")
let validacion
let sendBtn = retroFormulario.getElementById("send-btn")
let cancelBtn = retroFormulario.getElementById("cancel-btn")

function validarInputs() {
    validacion = true
    if (nombre.value == "") { /* valido si son espacios vacios, caso que se cumpla , significa que no relleno correctamente*/ 
        validacion = false
        mostrarSpan(pNombre)
    }

    if (apellido.value == "") {
        validacion = false
        mostrarSpan(pApellido)
    }

    if (email.value == "") {
        validacion = false
        mostrarSpan(pEmail)
    }

    if (telefono.value == "") {
        validacion = false
        mostrarSpan(pTelefono)
    }

    if (provincia.value == "") {
        validacion = false
        mostrarSpan(pProvincia)
    }

    if (ciudad.value == "") {
        validacion = false
        mostrarSpan(pCiudad)
    }
}

function mostrarSpan(esteElemento) {
    esteElemento.style.display = "block"
}

function volverAInicio(){
    window.location.href = "../index.html"
}

function enviarCuestionario(){
    validarInputs();
    if(validacion == true){
        alert("Has completado la subscripcion a Retro +, mas tarde te llegara un email para tu confirmacion en el programa.")
        setTimeout(volverAInicio, 1000)
    }
}

function cancelarCuestionario(){
    alert("Has cancelado el formulario, borrando datos ingresados.Volviendo a inicio")
    setTimeout(volverAInicio, 1000)
}

sendBtn.addEventListener("click",enviarCuestionario)
cancelBtn.addEventListener("click",cancelarCuestionario)