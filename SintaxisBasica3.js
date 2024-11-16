<<<<<<< HEAD
    var nombre= prompt("ingrese su nombre: ");
    var apellido= prompt("ingrese su apellido: ");
    var edad= prompt("ingrese su edad: ");

    document.write("<p>");
    document.write(nombre + " " + apellido+ "<br/> edad: "+edad);
    document.write("</p>");

    var datosPersonales = [nombre, apellido, edad];
    document.write("<p> El primer dato es <strong>");
    document.write(datosPersonales[0] + "</strong> </p>");
    alert("longitud del array: "+datosPersonales.length);
    datosPersonales.push("Humano");
    document.write("<p> El ultimo dato es <strong>");
    document.write(datosPersonales[datosPersonales.length-1] + "</strong> </p>");
    
    datosPersonales.push(prompt("ingrese un dato mas"))
    document.write("<p> Ahora si el ultimo dato es <strong>");
    document.write(datosPersonales[datosPersonales.length-1] + "</strong> </p>");
=======
    var nombre= prompt("ingrese su nombre: ");
    var apellido= prompt("ingrese su apellido: ");
    var edad= prompt("ingrese su edad: ");

    document.write("<p>");
    document.write(nombre + " " + apellido+ "<br/> edad: "+edad);
    document.write("</p>");

    var datosPersonales = [nombre, apellido, edad];
    document.write("<p> El primer dato es <strong>");
    document.write(datosPersonales[0] + "</strong> </p>");
    alert("longitud del array: "+datosPersonales.length);
    datosPersonales.push("Humano");
    document.write("<p> El ultimo dato es <strong>");
    document.write(datosPersonales[datosPersonales.length-1] + "</strong> </p>");
    
    datosPersonales.push(prompt("ingrese un dato mas"))
    document.write("<p> Ahora si el ultimo dato es <strong>");
    document.write(datosPersonales[datosPersonales.length-1] + "</strong> </p>");
>>>>>>> 143d5181b1370e7f66fc9cd73e3f04ebde472b58
    datosPersonales.pop