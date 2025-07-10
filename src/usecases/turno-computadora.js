import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos
 * @param {divCartasComputadora} elemento HTML para mostrar las cartas
    @param {Array<String>} deck
*/

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!puntosHTML) throw new Error('puntosHTML es necesario');
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta);
        //TODO crear carta
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
