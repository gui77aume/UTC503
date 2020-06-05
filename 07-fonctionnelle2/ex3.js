var authors = [{ name: 'Franquin', country: 'be' }, { name: 'Uderzo', country: 'fr' }, { name: 'Hergé', country: 'be' }];
// Ecrivez le code renvoyant un tableau contenant uniquement les noms des auteurs belges précédés de M.
// Instructions de boucle interdites.
var format_monsieur = function (auteur) { return "M. " + auteur.name; };
var isBelgian = function (auteur) { return auteur.country == "be"; };
var belgian_authors_list = authors.filter(isBelgian);
var belgian_authors = belgian_authors_list.map(format_monsieur);
console.log(belgian_authors); // [ 'M. Franquin', 'M. Hergé']
//Anonymization !
var belgian_authorsII = authors.filter(function (auteur) { return auteur.country == "be"; }).map(function (auteur) { return "M. " + auteur.name; });
console.log(belgian_authorsII);
