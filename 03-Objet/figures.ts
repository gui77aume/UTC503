class PolygoneRegulier {

    protected nCotes: number;
    protected longueurCote : number; //polygones réguliers seulement
    protected nom: string;

    constructor (nCotes: number, longueurCote : number){

        if (nCotes < 3) { console.log("Attention, nombre de cotés inferieur à 3");}
        if ( Math.round(nCotes) != nCotes )  { console.log("Attention, le nombre de cotés n'est pas un entier.");}

        this.longueurCote = longueurCote;
        this.nCotes = nCotes;
        this.nom= "Polygône régulier";
    }
        

    getPerimetre(){
        return this.nCotes*this.longueurCote;
    }

    getAire(){
       return this.nCotes * this.longueurCote * this.longueurCote / (4* Math.tan(Math.PI/this.nCotes));
    }

    getDimensions(){
        let rapport : string;
        rapport ="Nom du polygône : " + this.nom
                 +"\nNombre de cotés : " +this.nCotes 
                 +"\nLongueur du coté : " + this.longueurCote
                 +"\nPérimètre : " + this.getPerimetre()
                 +"\nAire : " + this.getAire();
                 

        return rapport;
                      
    }


}


class Triangle extends PolygoneRegulier {
    
    constructor(longueurCote: number){
    super(3,longueurCote);
    this.nom="triangle";
    }

    getHauteur(){
        return this.longueurCote*Math.sqrt(3)/2;
    }

    getDimensions(){
        return super.getDimensions() + "\nHauteur : " + this.getHauteur();
    }

}



class Losange extends PolygoneRegulier {

    protected diagonale1 : number;
    protected diagonale2 : number;

    
    constructor(diagonale1: number, diagonale2:number){

        let cote = Math.sqrt( diagonale1*diagonale1/4  + diagonale2*diagonale2/4)
        super(4,cote);
        if (this.diagonale1 == this.diagonale2) {
            this.nom="Carré";
        } else {  
            this.nom="Losange";
        }
        this.diagonale1=diagonale1;
        this.diagonale2=diagonale2;
    }

    getdiagonale1(){
        return this.diagonale1;
    }
    getdiagonale2(){
        return this.diagonale2;
    }

    isCarre() {
        return (this.diagonale1 == this.diagonale2);
    }
    

    getDimensions(){
        let resultat : string;
    
        resultat = super.getDimensions() + "\nDiagonale 1 : " + this.diagonale1
        + "\nDiagonale 2 : " + this.diagonale2;

        return resultat;

    }

}



let t1 = new Triangle(5);
let t2 = new Triangle(10);
let l1 = new Losange(5,6);
let l2 = new Losange(4,4);

let polygones:PolygoneRegulier[] = [t1,t2,l1,l2];
for (let p of polygones){
    console.log (p.getDimensions());
    console.log ("\n");
}

