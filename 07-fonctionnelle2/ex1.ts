// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda 
function format_message(from, to, message){
    return "From: " + from + ", To: " + to + "Msg: " + message;
}

//sans fonctions anonymes
let msg = m=>{return " Message: " + m};
let to = t=>{return " To :" + t};
let fromTo = t => f=>{return "From: " + f + to(t)};
let formatMessage = mess => to => from => {return fromTo(to)(from)+ msg(mess)};

console.log(formatMessage("Mess!")("Moi")("qqun"));

//anonymization !

let lambdaFormatMessage = message=> to => from => {return "From: " + from + " To: " + to + " Message : " + message};
console.log(lambdaFormatMessage("Coucou !")("destinataire")("expediteur"));



