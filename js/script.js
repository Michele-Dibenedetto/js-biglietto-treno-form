// assegno il bottone per generare il biglietto ad una variabile
var button = document.getElementById("create");
// creo un evento al click del bottone
button.addEventListener("click",
    function () {
        // prendo il valore assegnato all'input
        var name = document.getElementById("name").value;
        console.log(name);

        var km = document.getElementById("km").value;
        console.log(km);

        var range_age = document.getElementById("range_age").value;
        console.log(range_age);

        // calcolo prezzo del biglietto
        const euroAlKm = 0.21;
        var costoBiglietto =Math.floor(km * euroAlKm);
        console.log(costoBiglietto);

        // sconto biglietto
        var scontoMinorenni = costoBiglietto * 20 / 100;
        var scontoAnziani = costoBiglietto * 40 / 100;
        var bigliettoScontato;
        var typeOffer = "biglietto standard"

        // sconto in base all'eta
        if (range_age == "minorenne") {
            bigliettoScontato = costoBiglietto - scontoMinorenni;
            typeOffer = "sconto minorenne";
        } else if (range_age == "old65") {
            bigliettoScontato = costoBiglietto - scontoAnziani;
            typeOffer = "sconto anziano/a";
        }
        console.log(costoBiglietto);
        console.log(bigliettoScontato);

        // generatore casuale per carrozza e codice
        var number_carriage = Math.floor(Math.random() * 9) + 1;
        var number_code = Math.floor(Math.random() *(100000 - 90000)) + 90000;

        // inserimento dati nella tabella
        document.getElementById("name_passenger").innerHTML = name;

        document.getElementById("type_ticket").innerHTML = typeOffer;
        document.getElementById("carriage").innerHTML = number_carriage;
        document.getElementById("code").innerHTML = number_code;
        if (range_age == "minorenne" || range_age == "old65") {
            document.getElementById("price").innerHTML = bigliettoScontato;
        } else {
            document.getElementById("price").innerHTML = costoBiglietto;
        }
    }
)

var reload = document.getElementById("reset");
reload.addEventListener("click" , 
    function () {
        location.reload()
    }
)
