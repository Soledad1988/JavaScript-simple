function cambiar_parrafo(){
   document.getElementById("edit-acercade").style.display="block";
   let texto=document.getElementById("text-acercade").innerText;
   console,log(texto);
}

function myFuncion2(valor){
    document.getElementById("text-acercade").innerText=valor;
}

function logMessage(message){
    console.log(message + "<br>")
}

//controla cuando se preciona el enter
let textarea=addEventListener('keyup', (e) => {
    logMessage(`key "${e.key}" released [event:keyup]`);
    if (e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});