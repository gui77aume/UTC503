abstract class ZooAnimal {

// Attributs
protected nom: string;
protected age: number;
protected poids: number;
protected quantiteNourritureTotale: number;
protected bienNourri: boolean;


//methode abstraite à definir dans chaque classe fille
//plus sûr que d'implémenter une methode par défaut : elle risquerait de ne pas être redefinie dans les classes filles

abstract calculeBienNourri()

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

class Panda extends ZooAnimal {
    private plantePreferee: string;

    constructor(nom: string, age: number, poids: number, plantePreferee: string) {
        super(nom,age,poids);
        this.plantePreferee=plantePreferee;
    }

    calculeBienNourri(){
        return this.quantiteNourritureTotale > (this.poids/4);
    }
    
    etatAlimentation(){
        return super.etatAlimentation() + " sa plante preferee est : " + this.plantePreferee;

    }
}

class Dauphin extends ZooAnimal {
    private poissonPrefere: string;

    constructor(nom: string, age: number, poids: number, poissonPrefere: string) {
        super(nom,age,poids);
        this.poissonPrefere=poissonPrefere;
    }

    calculeBienNourri(){
        return this.quantiteNourritureTotale > (this.poids/8);
    }

    etatAlimentation(){
        return super.etatAlimentation() + " sa plante preferee est : " + this.poissonPrefere;

    }

}


// Création d’instances de classes: objets
let flipper = new Dauphin("Flipper", 30, 150,"maquereau");
let pandi= new Panda("Pandi", 10, 80,"bambou");
// Appels de méthodes sur les objets
flipper.setNom("Flipper Junior");
flipper.nouvelleJournee();
pandi.nouvelleJournee();
flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
console.log(flipper.etatAlimentation());
console.log(pandi.etatAlimentation());
