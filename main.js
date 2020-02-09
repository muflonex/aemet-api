import actualizar_datos from './modules/conexion.js';
import { get_id, modificar_select, cambiar_fondo } from './modules/dom.js';

modificar_select();
cambiar_fondo();
actualizar_datos(); 
get_id("ciudad").onchange = function(){
    actualizar_datos();
    cambiar_fondo();
};