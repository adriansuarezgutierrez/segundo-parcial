var getData = function() {
    var nombre = document.getElementById("pnombre").value;
    var apellido = document.getElementById("Aapellidos").value;
    var ciudad = document.getElementById("ciudad").value;
    var mensaje = document.getElementById("Mensaje").value;
    var ele = document.getElementsByName('genero');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            var gene = ele[i].value;
    }
    var ele5 = document.getElementsByName('acep');
    for (i = 0; i < ele5.length; i++) {
        if (ele5[i].checked)
            var acepto = ele5[i].value;

    }
    console.log("Nombre: " + nombre + "\n" + "Apellidos: " + apellido + "\n" + "Ciudad: " + ciudad + "\n" + "Genero: " + gene + "\n" + "Mensaje: " + mensaje + "\n" + "Acepto?: " + acepto);
}
