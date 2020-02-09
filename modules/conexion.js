import * as DOM from './dom.js';
export default function actualizarDatos() {
    
    const ciudad = DOM.get_id('ciudad').value;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if ( this.readyState === 4 && this.status === 200 ){
            parsearJSON(this.responseText);
        }
    };
    xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=57703a7a9ab7b873a99116a3ea379748`);    
    xhttp.send();
    
}

function parsearJSON (object) {
    const datos = JSON.parse(object);
    const { temp_min, temp_max } = datos.main;
    const { sunrise, sunset } = datos.sys;
    const resultado = { temp_min, temp_max, sunrise, sunset };
    DOM.limpiar('datos');
    DOM.pintar(resultado);
}
