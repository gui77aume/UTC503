// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda 
function format_message(from, to, message) {
    return "From: " + from + ", To: " + to + "Msg: " + message;
}
//sans fonctions anonymes
var msg = function (m) { return " Message: " + m; };
var to = function (t) { return " To :" + t; };
var fromTo = function (t) { return function (f) { return "From: " + f + to(t); }; };
var formatMessage = function (mess) { return function (to) { return function (from) { return fromTo(to)(from) + msg(mess); }; }; };
console.log(formatMessage("Mess!")("Moi")("qqun"));
//anonymization !
var lambdaFormatMessage = function (message) { return function (to) { return function (from) { return "From: " + from + " To: " + to + " Message : " + message; }; }; };
console.log(lambdaFormatMessage("Coucou !")("destinataire")("expediteur"));
