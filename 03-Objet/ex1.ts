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
    private max : Mesurable;
    private min : Mesurable;

    constructor(t: Array<Mesurable>){
        if (t.length==0 || t == null) {
            console.log("MinMax: pbm initialisation");
            return;}

        this.min=t[0];
        this.max=t[0]; 
        this.computeMinMax(t);
    }

    private computeMinMax(t: Array<Mesurable>){
        for(let e of t){
            if (e.length>this.max.length) {this.max=e;}
            if (e.length<this.min.length) {this.min=e;}
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
console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()} `);
console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()} `);

let chaines: Array<string> = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
let chaineMinMax = new MinMax(chaines);
console.log(`La plus grande chaine est : ${chaineMinMax.getMax()} `);
console.log(`La plus petite chaine est : ${chaineMinMax.getMin()} `);

// Replace console.log by alert when run on TypeScript Playground
