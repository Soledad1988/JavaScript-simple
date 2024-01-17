window.addEventListener("load",inicio);

function inicio(){
    document.getElementById('crearParrafo').addEventListener('click',crearParrafo)
    document.getElementById('borrarUltimo').addEventListener('click',borrarUltimo)
    document.getElementById('borrarPrimero').addEventListener('click',borrarPrimero)
}

function crearParrafo(){
    // Crear elemento
    var parrafo = document.createElement("p"); //p porque es un parrafo
    // Craer texto
    var texto = document.createTextNode(document.getElementById("texto").value);
    // agregamos el texto al parrafo
    parrafo.appendChild(texto);

    //añadir atributios
    parrafo.setAttribute('class','miClase');

    //añadir al div
    var cont = document.getElementById('div1');
    cont.appendChild(parrafo)
}

function borrarUltimo(){
    var cont = document.getElementById('div1');
    var hijo = cont.lastChild; //selecciona el ultimo hijo
    // eliminar el nodo
    cont.removeChild(hijo);
}

function borrarPrimero(){
    var cont = document.getElementById('div1');
    var hijo = cont.firstChild; //selecciona el primer hijo
    // eliminar el nodo
    cont.removeChild(hijo);
}
