let etaUtente = Number.parseInt(prompt("Inserisci la tua età"), 10);

let utenteKmDaPercorrere = Number.parseFloat(prompt("Inserisci i chilomentri che desideri percorrere per calcolare l'esatto importo del tuo biglietto"), 10);

let prezzoBiglietto = (utenteKmDaPercorrere * 0.276);

if (isNaN(utenteKmDaPercorrere) || isNaN(etaUtente) || utenteKmDaPercorrere <= 0 || etaUtente <= 0 || etaUtente > 150) {
    alert("Attento hai inserito valori non validi");
    location.reload(etaUtente);

}else if (etaUtente > 65){
    prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 0.42));
    console.log("il prezzo del tuo biglietto avendo un'età maggiore di 65 anni è:" + " " + (prezzoBiglietto.toFixed(2)));
    document.getElementById("output").innerHTML = ("il prezzo del tuo biglietto avendo un'età maggiore di 65 anni è:" + " " + (prezzoBiglietto.toFixed(2)));
} else if(etaUtente < 18){
    prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 0.21));
    console.log("il prezzo del tuo biglietto essendo minorenne è di:" + " " + (prezzoBiglietto.toFixed(2)));
    document.getElementById("output").innerHTML = ("il prezzo del tuo biglietto essendo minorenne è di:" + " " + (prezzoBiglietto.toFixed(2)));
}else{
console.log("Il prezzo del tuo biglietto non rientrando nell'età per un possibile sconto è:" + " " + (prezzoBiglietto.toFixed(2)));
document.getElementById("output").innerHTML = ("Il prezzo del tuo biglietto non rientrando nell'età per un possibile sconto è:" + " " + (prezzoBiglietto.toFixed(2)));
}


