class Car {
    constructor(public brand: string,
        public model: string,
        public price: number){}

        toString = ()=>"Voiture de marque " + this.brand + ", de modèle : " + this.model +" et de prix " + this.price; 
}

let cars: Car[] = [new Car('Renault', 'Twizy', 7540), 
                   new Car('Alfa Romeo', 'Mito', 15490),
                   new Car('Volkswagen', 'Golf', 21990),
                   new Car('Porsche', '718', 55040),
                   new Car('BMW', 'Serie 1', 23200),
                   new Car('Audi', 'A4', 33670),
                   new Car('Porsche', 'Macan', 58835),
                   new Car('Volkswagen', 'Polo', 14430),
];


let voitureLaPlusChere =  (voitures : Car[]) => voitures.reduce( (voitureDavant,voitureCourante)=>(voitureDavant.price>voitureCourante.price)?voitureDavant:voitureCourante )
let voitureLaMoinsChere= (voitures : Car[]) => voitures.reduce( (voitureDavant,voitureCourante)=>(voitureDavant.price<voitureCourante.price)?voitureDavant:voitureCourante )
let prixMoyen = (arrayDeVoitures : Car[]) => arrayDeVoitures.reduce((accumulateur,courant)=>accumulateur+courant.price,0)/arrayDeVoitures.length;
let prixMoyenParMarque = (arrayDeVoitures : Car[]) => (marque:String)=> prixMoyen ( arrayDeVoitures.filter( (v:Car)=>v.brand===marque));

console.log('Voiture la plus chère: ' + voitureLaPlusChere(cars));
console.log('Voiture la moins chère: ' + voitureLaMoinsChere(cars));
console.log("Prix moyen des voitures: " + prixMoyen(cars));
console.log("prix moyen des Porsches : " + prixMoyenParMarque(cars)('Porsche'));

