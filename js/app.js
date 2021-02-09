function campoRequerido(input){
    console.log("se ejecutó el onblur");
    //let input = document.querySelector("#nombre");
if (input.value.trim() === ""){
    input.className="form-control is-invalid"
} else {
    input.className= "form-control is-valid"
}
}

function validarEmail(email){
    console.log(email);
let expresion = /\w+@\w+\.[a-z]{2,}$/;
if (email.value.trim() != "" && expresion.test(email.value)){
    email.className = "form-control is-valid"
} else {
    email.className = "form-control is-invalid"
}
}

function validarNumeros(inputTelefono){
    if (inputTelefono.value.trim() != "" && !isNaN(inputTelefono.value)){
    inputTelefono.className = "form-control is-valid"
} else {
    inputTelefono.className = "form-control is-invalid"
}
}
//isNam - esto no es un numero
//devuelve true y false
// ! dealnte de isNam invierte el valor de true y false

function validarConsulta(texto){
    if (texto.value.trim() != "" && texto.value.length >= 10){
        texto.className = "form-control is-valid"
    } else {
        texto.className = "form-control is-invalid"
    }

    
}