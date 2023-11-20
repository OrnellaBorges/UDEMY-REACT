//fonctions qui permettent de rendre un nombre aleatoire
function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
//Math.floor prend un nombre à virgule flottante en argument et renvoie le plus grand entier inférieur ou égal à ce nombre.
let nombre = 5.67;
let arrondiVersLeBas = Math.floor(nombre);

console.log(arrondiVersLeBas);

/*La fonction Math.random() renvoie un nombre 
flottant pseudo-aléatoire dans l'intervalle [0, 1). 
Cela signifie que le nombre généré est compris entre 0 (inclus) et 1 (exclu).*/

let nombreAleatoire = Math.random();
console.log(nombreAleatoire);

/*Ici, Math.random() * 10 génère un nombre entre 0 (inclus) et 10 (exclu), et Math.floor arrondit vers le bas pour obtenir un nombre entier. 
En ajoutant 1 à ce résultat, nous obtenons un nombre entre 1 et 10 (inclus).*/
let nombreAleatoireDansLaPlage = Math.floor(Math.random() * 10) + 1;
console.log(nombreAleatoireDansLaPlage);
