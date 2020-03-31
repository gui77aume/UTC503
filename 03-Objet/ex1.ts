interface Mesurable {
    length: number;
}

class Trajet implements Mesurable {
    private nom: string;
    public length: number;

    constructor(nom : string, longueur : number){
        this.length = longueur;
        this.nom = nom;
    }

    toString(): string {
        return `Trajet ${this.nom} de ${this.length}Km`;
    }
}

class MinMax {
    private max : number;
    private min : number;

    constructor(t: Array<Mesurable>){
        if (t.length==0 || t == null) {
            console.log("MinMax: pbm initialisation");
            return;}

        this.min=t[0].length;
        this.max=t[0].length; 
        this.computeMinMax(t);
    }

    private computeMinMax(t: Array<Mesurable>){
        for(let e of t){
            if (e.length>this.max) {this.max=e.length;}
            if (e.length<this.min) {this.min=e.length;}
        }
    }

    getMin() {
        return this.min;   //
    }

    getMax(){
        return this.max;
    }
}

let trajets: Array<Trajet> = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
let trajetMinMax = new MinMax(trajets);
console.log(`Le plus grand trajet mesure : ${trajetMinMax.getMax()} km`);
console.log(`Le plus petit trajet mesure : ${trajetMinMax.getMin()} km`);

let chaines: Array<string> = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
let chaineMinMax = new MinMax(chaines);
console.log(`La plus grande chaine mesure : ${chaineMinMax.getMax()} caractères`);
console.log(`La plus petite chaine mesure : ${chaineMinMax.getMin()} caractères `);

// Replace console.log by alert when run on TypeScript Playground
