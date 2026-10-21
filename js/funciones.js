console.log("link al html");

document.getElementById("boton").innerHTML = "Cambiar web 1";
document.getElementsByClassName("caja")[0].innerHTML = "Cambiar web 2";

// comentarios

document.getElementById("suma").addEventListener("click", function() {
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let resultado = num1 + num2;
document.getElementById("res").innerHTML = "El resultado es: " + resultado;
})

document.getElementById("marco").addEventListener("mouseover", function() {
    document.getElementById("marco").setAttribute("style", "font-family: Arial;");
    document.getElementById("marco").style.border = "5px solid red";
    document.getElementById("marco").style.backgroundColor = "lime";
})

document.getElementById("marco").addEventListener("mouseout", function() {
    document.getElementById("marco").setAttribute("style", "font-family: times new roman;");
    document.getElementById("marco").style.border = "5px solid white";
    document.getElementById("marco").style.backgroundColor = "white";
})