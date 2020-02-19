(function () {
    solicitud();

})();

function solicitud() {
    var opcion = prompt("Ingrese un numero del 1 al 5 :", "1");

    if (opcion == 1) {
        ejercicio1();
    } else if (opcion == 2) {
        ejercicio2();
    } else if (opcion == 3) {
        ejercicio3();
    } else if (opcion == 4) {
        ejercicio4();
    } else if (opcion == 5) {
        ejercicio5();
    } else {
        solicitud();
    }
}

function ejercicio1() {
    document.write("<h1>Ejercicio1</h1>");
    var numero;
    do {
        numero = prompt("Ingrese un numero del 1 al 100 :", "1");
    } while (numero > 100 || numero <1);

    for (i = 0; i <= numero; i++) {
        document.write("<p>"+ i +"</p>");
        console.log(i);
    }
    
}

function ejercicio2() {
    document.write("<h1>Ejercicio2</h1>");
}

function ejercicio3() {
    document.write("<h1>Ejercicio3</h1>");
}

function ejercicio4() {
    document.write("<h1>Ejercicio4</h1>");
}

function ejercicio5() {
    document.write("<h1>Ejercicio5</h1>");
}