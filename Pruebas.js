var nombre = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Biennnnnn");
    },1000);
    
});

nombre.then((mensajeOk)=>{
    document.getElementById("root").innerHTML = mensajeOk;
});

function returnDiv(){
    let dato = "Hola React";
    return (<div id="datoReact">${dato}</div>);

}