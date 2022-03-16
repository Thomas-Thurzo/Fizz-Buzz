
// Start Funktion 
function getValues(){

    // Get Zahlen
    let fizzZahl = document.getElementById("fizzZahl").value;
    let buzzZahl = document.getElementById("buzzZahl").value;

    // Umwandeln Zahlen in Integer
    fizzZahl = parseInt(fizzZahl);
    buzzZahl = parseInt(buzzZahl);

    // Check Eingabe
    if(fizzZahl == buzzZahl){
        alert("Bitte zwei unterschiedliche Zahlen eingeben!");
    }
    else{
         // Zahlen anzeigen
    anzeigeFunktion(fizzZahl, buzzZahl);
    } 
}

// Anzeige Funktion
function anzeigeFunktion(fizzZahl, buzzZahl){

    let templateRows = "";

    for (let index = 0; index <= 100; index++) {

        if(index % fizzZahl == 0 && index % buzzZahl == 0 && index != 0){
            templateRows += `<tr><td>` + "FIZZ-BUZZ" + `</tr></td>`;
        }
        else if(index % fizzZahl == 0 && index != 0){
            templateRows += `<tr><td>` + "Fizz" + `</tr></td>`;
        }
        else if(index % buzzZahl == 0 && index != 0){
            templateRows += `<tr><td>` + "Buzz" + `</tr></td>`;
        }
        else{
            templateRows += `<tr><td>` + index + `</tr></td>`;
        }     
    }

    document.getElementById("ergebnis").innerHTML = templateRows;
}