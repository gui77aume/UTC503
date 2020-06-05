let authors = [{ name: 'Franquin', country:'be' }, { name: 'Uderzo', country:'fr' }, { name: 'Hergé', country:'be' }];
// Ecrivez le code renvoyant un tableau contenant uniquement les noms des auteurs belges précédés de M.
// Instructions de boucle interdites.

let format_monsieur = auteur => "M. " + auteur.name;
let isBelgian = auteur => auteur.country=="be";
let belgian_authors_list = authors.filter(isBelgian);
let belgian_authors =  belgian_authors_list.map(format_monsieur);

console.log(belgian_authors); // [ 'M. Franquin', 'M. Hergé']

//Anonymization !

let belgian_authorsII= authors.filter(auteur => auteur.country == "be").map(auteur => "M. " + auteur.name);
console.log(belgian_authorsII);