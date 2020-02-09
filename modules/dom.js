export { get_id, pintar, limpiar, modificar_select, cambiar_fondo };
import { celsius, crearFecha } from './util.js';

const get_id = node_id => document.getElementById(node_id);

const pintar = datos => {
    for (let dato in datos) {
        crear_nodo(dato,datos)
    };
}
const crear_nodo = (dato,datos) => {
    const line = document.createElement("p");
    let valor;
    if(dato === 'temp_min' || dato === 'temp_max'){
        valor = celsius(datos[dato]);
    }
    if(dato === 'sunrise' || dato === 'sunset'){
        valor = crearFecha(datos[dato]);
    }
    const texto = document.createTextNode(`${dato}: ${valor} `);
    line.appendChild(texto);
    get_id('datos').appendChild(line);
} 

const limpiar = (nombre_nodo) => {
    while(get_id(nombre_nodo).lastChild){
        get_id(nombre_nodo).lastChild.remove();
    }
    
}

const modificar_select = () => {
    $('#ciudad').select2();
}

const cambiar_fondo = () => {
    limpiar('fondo');
    const fondos = {
        Barcelona: "https://media.giphy.com/media/12niPtYoN2meuQ/giphy.mp4",
        Madrid: "https://media.giphy.com/media/lqMpw99IbHNhMplwfd/giphy.mp4",
        Sevilla: "https://media.giphy.com/media/f9jQHQPbNxQ63GLGJG/giphy.mp4",
        Valencia: "https://media.giphy.com/media/KeWEXSk6tKaEbjHr1M/giphy.mp4",
    }
    const ciudad = get_id('ciudad').value;
    const video = get_id('fondo');
    
    video.setAttribute("src", fondos[ciudad]);
    video.play();
}