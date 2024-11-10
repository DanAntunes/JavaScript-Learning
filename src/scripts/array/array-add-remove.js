
const clubes = ['Barcelona', 'Mancheter United', 'Ajax', 'Milan'];

clubes.push('Dortmund');
// push adiicona um novo item a lista.

clubes[3] = 'Feyenoord';
// sobescreve um item no array.

clubes.pop();
//remove o item mais proximo. Nesse caso removeu o Dortmund

clubes.shift();
// remove o primeiro item da lista. Neste caso Barcelona.
console.log(clubes);