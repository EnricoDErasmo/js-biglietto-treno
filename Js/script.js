/*
Il programma dovrà chiedere all'utente il numero di chilometri 
che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo
 totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana
 (con massimo due decimali, per indicare centesimi sul prezzo).
*/

/*
- chiedere numero di km
- chiedere età passeggero
- calcolare il prezzo totale del viaggio
?SE il passeggero ha meno di 18 anni:
 °sconto 20%
ALTRIMENTI se il passeggero ha 65 anni o più:
 °sconto 40%
*/

let distance = parseInt(prompt("Quanti km vuoi percorrere?"));
let age = parseInt(prompt("Quanti hanni hai?"));

if (isNaN(distance) || isNaN (age)) {
    
    document.writeln ("Inserisci solo numeri!")
    
} else {
    
    let price = (0.21 * distance).toFixed(2);
    let discount;
    let totalPrice;
    
    if (age < 18) {
        
        discount = ((price / 100) * 20).toFixed(2);
        
        totalPrice = (price - discount).toFixed(2);

        document.writeln (`Vuoi percorrere ${distance} Km`);
        document.write("<br>");
        document.writeln (`Hai ${age} anni`);
        document.write("<br>");
        document.writeln (`Il prezzo totale del tuo biglietto è di ${price} €.`);
        document.write("<br>");
        document.writeln (`Lo sconto per gli under 18 è del 20%, risparmi ${discount} €!`);
        document.write("<br>");
        document.writeln (`Il prezzo del tuo biglietto scontato è di ${totalPrice} €!`);
        document.write("<br>");
        document.writeln (`Buon viaggio!`);
        
    } else if (age >= 65) {
    
        discount = ((price / 100) * 40).toFixed(2);

        totalPrice = (price - discount).toFixed(2);

        document.writeln (`Vuoi percorrere ${distance} Km`);
        document.write("<br>");
        document.writeln (`Hai ${age} anni`);
        document.write("<br>");
        document.writeln (`Il prezzo totale del tuo biglietto è di ${price} €.`);
        document.write("<br>");
        document.writeln (`Lo sconto per gli over 65 è del 40%, risparmi ${discount} €!`);
        document.write("<br>");
        document.writeln (`Il prezzo del tuo biglietto scontato è di ${totalPrice} €.`);
        document.write("<br>");
        document.writeln (`Buon viaggio!`);
    
    } else {
        document.writeln (`Vuoi percorrere ${distance} Km`);
        document.write("<br>");
        document.writeln (`Hai ${age} anni`);
        document.write("<br>");
        document.writeln (`Ci dispiace, non sono previsti sconti per la tua fascia di età.`);
        document.write("<br>");
        document.writeln (`Il prezzo del tuo biglietto è di ${price} €.`);
    }

}





