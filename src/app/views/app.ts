import * as _ from 'lodash';
const gameboy = require('./gameBoy.html');
import  './css/styles.css';


function component() {
    const element = document.createElement('div');
    
    // el caractér _ hace referencia a una biblioteca llamada lodash que será muy útil
    element.id = "contenedor";
    
    return element;
}
const contenedor = component();
const html = document.createRange().createContextualFragment(gameboy);
contenedor.appendChild(html);
document.body.appendChild(contenedor);

