

 class fibObserver{
     private nom:string;
     constructor(nomObservateur:string){
         this.nom=nomObservateur;   
    }
     update(message:string):void{
        console.log("Changement notifié à:" + this.nom + " : "+message);
    }
}

interface Observable{
    attach(observateur):void;
    //detach():void;
    //getState():boolean;
    notifyChange(message:string):void;
}

interface Iterateur<T>{
    first():void;
    next():void;
    isDone(): boolean;
    currentItem(): T;
}

class Fibonacci   implements Iterateur<number>,Observable {
    // fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)

    private nMax : number;
    private index : number;
    private nMoinsUn : number;
    private nMoinsDeux : number
    private observateurs : fibObserver[]; //TODO: on devrait avoir une liste d'observateurs, pas un seul
    private nombreObservateurs;
   
    constructor (n:number){
        this.nMax=n;
        this.index=0;
        this.nMoinsDeux=-1;
        this.nMoinsUn=1;
        this.observateurs=new Array(10);
        this.nombreObservateurs=0;
    }

    public attach(o:fibObserver){
        this.observateurs[this.nombreObservateurs]=o;
        this.nombreObservateurs++;
    }

    public notifyChange(message:string):void{
        var i:number;
            for (i=0;i<this.nombreObservateurs;i++) {
                this.observateurs[i].update(message);
            }
    }

    public first():void{
        this.index=0;
        this.nMoinsDeux=0;
        this.nMoinsUn=1;
        //this.notifyChange("First !");
    }
    
    public next():void{
        var passage=this.nMoinsUn + this.nMoinsDeux;
        this.nMoinsDeux=this.nMoinsUn;
        this.nMoinsUn=passage;   
        this.index++;
        if (this.isDone()){ this.notifyChange("Fin ! \n"); }
        
    }

    public isDone():boolean  {
      return this.index == this.nMax;
    }

    public currentItem ():number {
        var resultat;
        if (this.index==1 || this.index==0){
            resultat=this.index;
        } else {
            resultat= this.nMoinsUn + this.nMoinsDeux;
        }
        return resultat;
    }


}




// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
var f: Fibonacci ;
var o1,o2 : fibObserver;
f = new Fibonacci(10); // (**)
o1 = new fibObserver("observateur n°1");
f.attach(o1);
o2 = new fibObserver("observateur n°2");
f.attach(o2);
while(!f.isDone()){
    console.log(`${f.currentItem()},`);
    f.next();
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
