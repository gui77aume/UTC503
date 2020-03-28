class ZooAnimal {

// Attributs
private nom: string;
private age: number;
private poids: number;
private quantiteNourritureTotale: number;
private bienNourri: boolean;

// Constructeur
constructor(nom: string, age: number, poids: number) {
this.nom= nom;
this.age= age;
this.poids= poids;
this.quantiteNourritureTotale= 0;
this.bienNourri= false;}

// Méthodes

//accesseurs
getNom(){
    return this.nom;
}

setNom(nouveauNom: string) {
    //controle de la valeur
    if (nouveauNom == null || nouveauNom.trim().length == 0) {
        console.log("erreur, le nouveau nom est vide ou incorrect");
        return;
    } 
    this.nom=nouveauNom;

}


nouvelleJournee() {
this.quantiteNourritureTotale= 0;
this.bienNourri= false;}

recoitNourriture(quantite: number) {
this.quantiteNourritureTotale+= quantite;
if (this.quantiteNourritureTotale> (this.poids/ 5)) {this.bienNourri= true;} else{this.bienNourri= false;}
}

etatAlimentation() {
let etat= this.nom+ ", " + this.age+ " ans,  a reçu " + this.quantiteNourritureTotale+ " kg de nourriture."
if (this.bienNourri) {etat+= " " + this.nom+ " est bien nourri.";}return etat;}

}

// Création d’instances de classes: objets
let flipper = new ZooAnimal("Flipper", 30, 150);
let pandi= new ZooAnimal("Pandi", 10, 80);
// Appels de méthodes sur les objets
flipper.setNom("Flipper Junior");
flipper.nouvelleJournee();
pandi.nouvelleJournee();
flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
console.log(flipper.etatAlimentation());
console.log(pandi.etatAlimentation());
