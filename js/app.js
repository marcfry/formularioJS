function campoRequerido(input){
    console.log("se ejecutó el onblur");
    //let input = document.querySelector("#nombre");
if (input.value === "" || Number){
    input.className="form-control is-invalid"
} else {
    input.className= "form-control is-valid"
}
}