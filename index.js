import React from 'react';
import ReactDOM from 'react-dom';

var nombre = new Promise((resolve,reject)=>{
  setTimeout(function(){
      resolve("Biennnnnn");
  },8000);
  
});

nombre.then((mensajeOk)=>{
  document.getElementById("root").innerHTML = mensajeOk;
});

nombre.catch((error)=>{
  console.log(error);
});

function ConectadoWeb(estado){
  return <h1>Conectado</h1>;
}

function NoConectadoWeb(estado){
  return <h1>Desconectado</h1>;
}

function EstadoWeb(estado){
  const estadoConexion = estado.estadoConexion;
  if(estadoConexion){
    return <ConectadoWeb />;
  }
  return <NoConectadoWeb />;
}

ReactDOM.render(
  <EstadoWeb estadoConexion={true} />,
  document.getElementById('root')
);
