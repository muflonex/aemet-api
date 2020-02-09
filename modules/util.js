export { celsius, crearFecha }

const celsius = kelvin_temp => Math.trunc((kelvin_temp - 273.15))+"º C";
const crearFecha = timestamp => {
    const date_object = new Date(timestamp);
    const h = getZero(date_object.getHours());
    const m = getZero(date_object.getMinutes());
    const s = getZero(date_object.getSeconds());
    return `${h}:${m}:${s}`;
}
const getZero = number => number < 10 ? '0'+number : number; 