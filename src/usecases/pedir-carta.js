
/**
 * 
 * @param {Array<String>} deck es el array
 * @returns {String} retorna una carta 
 */
export const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
