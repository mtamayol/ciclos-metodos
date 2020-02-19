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

    for (i = 0; i <= numero;i++) {
        document.write("<p>"+ i +"</p>");
        console.log(i);
    } 
}

function ejercicio2() {
    document.write("<h1>Ejercicio2</h1>");
    var color;
    do {
        color = prompt("De que color es el caballo blanco de Napoleon", "");
    } while (color != 'blanco');
    document.write("<p>El caballo es blanco :)</p>");
}

function ejercicio3() {
    document.write("<h1>Ejercicio3</h1>");

    matematicas = parseFloat(prompt("Ingrese promedio de notas de Matematicas", ""));
    fisica = parseFloat(prompt("Ingrese promedio de notas de Fisica", ""));
    ciencias = parseFloat(prompt("Ingrese promedio de notas de Ciencias", ""));

    promedio = (matematicas + fisica + ciencias) /3;

    document.write("<p>El promedio de los ramos (redondeado) es: " + Math.round(promedio)+"</p>");
}

function ejercicio4() {
    document.write("<h1>Ejercicio4</h1>");
    var frutas = [];
    fruta1 = prompt("Ingrese la primera fruta", "");
    fruta2 = prompt("Ingrese la segunda fruta", "");
    fruta3 = prompt("Ingrese la tercera fruta", "");

    frutas.push(fruta1, fruta2, fruta3);
    for (let fruta of frutas) {
        if (fruta == 'manzana') {
            continue;
        }
        document.write("<p>" + fruta + "</p>");
        console.log(fruta);
    }
}

function ejercicio5() {
    document.write("<h1>Ejercicio5</h1>");
    var nombre = prompt("Ingrese su nombre", "");
    nombre = nombre.replace(/ /g, "");//se eliminan espacios
    var arrayNombre = nombre.split("");//se transforma en arreglo
    
    var patronVocales = /[aeiouAEIOUáéíóú]$/;
    var vocales = 0;
    var consonantes = 0;

    for (i = 0; i < arrayNombre.length; i++) {
        if (patronVocales.test(arrayNombre[i])) {
            vocales++;
        } else {
            consonantes++;
        }         
    }
    alert("las vocales de tu nombre son--> " + vocales + "\n" + "las consonantes de tu nombre son--> " + consonantes);

}