function campoRequerido(input) {
  console.log("se ejecutó el onblur");
  //let input = document.querySelector("#nombre");
  if (input.value.trim() === "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
}

function validarEmail(email) {
  console.log(email);
  let expresion = /\w+@\w+\.[a-z]{2,}$/;
  if (email.value.trim() != "" && expresion.test(email.value)) {
    email.className = "form-control is-valid";
    return true;
  } else {
    email.className = "form-control is-invalid";
    return false;
  }
}

function validarNumeros(inputTelefono) {
  if (inputTelefono.value.trim() != "" && !isNaN(inputTelefono.value)) {
    inputTelefono.className = "form-control is-valid";
    return true;
  } else {
    inputTelefono.className = "form-control is-invalid";
    return false;
  }
}
//isNam - esto no es un numero
//devuelve true y false
// ! dealnte de isNam invierte el valor de true y false

function validarConsulta(texto) {
  if (texto.value.trim() != "" && texto.value.length >= 10) {
    texto.className = "form-control is-valid";
    return true;
  } else {
    texto.className = "form-control is-invalid";
    return false;
  }
}

function contadorCaracteres(i) {
  console.log(i.value);
  document.getElementById("numeroCaracteres").innerHTML =
    i.value.length + " carácteres";
}

let checkTerminos = document.querySelector("#terminos");
//addEventListener agregar un evento a la variable entre parentesis nombre del evento y la funcion
checkTerminos.addEventListener("change", function (){
  console.log("desde la funcion del checkbox")
  if (checkTerminos.checked){
    checkTerminos.className = "form-check-input is-valid";
    return true;
  } else {
    checkTerminos.className = "form-check-input is-invalid";
    return false;
  }
})

function validarGeneral(event){
  event.preventDefault();
  console.log("desde la funcion validarGeneral");
  if(campoRequerido(document.getElementById("nombre"))== true && validarEmail(document.getElementById("email"))== true && validarNumeros(document.getElementById("telefono")) && validarConsulta(document.getElementById("consulta"))){
alert ("los datos estan bien cargados");
  } else {
    alert ("los datos estan mal cargados")
  }
}