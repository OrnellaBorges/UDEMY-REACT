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

// apply a discount function

function applyDiscount(price, discountPercentage) {
  // Vérifiez que les arguments sont des nombres positifs
  if (
    typeof price !== "number" ||
    typeof discountPercentage !== "number" ||
    price < 0 ||
    discountPercentage < 0
  ) {
    console.error("Les arguments doivent être des nombres positifs.");
    return null;
  }

  // Calculez le montant de la réduction
  const discountAmount = (discountPercentage / 100) * price;

  // Calculez le nouveau prix après la réduction
  const discountedPrice = price - discountAmount;

  // Retournez le nouveau prix
  return discountedPrice;
}

// Exemple d'utilisation :
const originalPrice = 100;
const discountPercentage = 20;
const discountedPrice = applyDiscount(originalPrice, discountPercentage);

console.log(`Prix original : $${originalPrice}`);
console.log(`Pourcentage de réduction : ${discountPercentage}%`);
console.log(`Prix après réduction : $${discountedPrice}`);

//version plus simple

function applyDiscount(price, discountPercentage) {
  // Vérifiez que les arguments sont des nombres positifs
  /*Cette version utilise Number.isFinite pour vérifier si les arguments sont des nombres finis (évitant ainsi les valeurs NaN ou Infinity) 
    et Math.max pour garantir que le nouveau prix après réduction est au moins 0.
    */

  if (
    !Number.isFinite(price) ||
    !Number.isFinite(discountPercentage) ||
    price < 0 ||
    discountPercentage < 0
  ) {
    console.error("Les arguments doivent être des nombres positifs.");
    return null;
  }

  // Calculez le montant de la réduction
  const discountAmount = (discountPercentage / 100) * price;

  // Calculez le nouveau prix après la réduction et assurez-vous qu'il est positif
  const discountedPrice = Math.max(0, price - discountAmount);

  // Retournez le nouveau prix
  return discountedPrice;
}

// Exemple d'utilisation :
/* const originalPrice = 100;
  const discountPercentage = 20;
  const discountedPrice = applyDiscount(originalPrice, discountPercentage); */

console.log(`Prix original : $${originalPrice}`);
console.log(`Pourcentage de réduction : ${discountPercentage}%`);
console.log(`Prix après réduction : $${discountedPrice}`);
