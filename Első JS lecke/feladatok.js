// 1. Írj egy függvényt, ami egyetlen tömböt vár paraméterként,
// és a függvény adja vissza a tömbben lévő páros számok számát!

console.log('1. Írj egy függvényt, ami egyetlen tömböt vár paraméterként,és a függvény adja vissza a tömbben lévő páros számok számát!')

const inputTomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12, 13, 14]

function parosSzamokSzama(tomb) {
    let parosSzamokSzamlalo = 0;

    for (let index = 0; index < tomb.length; index++) {
        if (tomb[index] % 2 == 0) {
            parosSzamokSzamlalo++;
        }
    }
    return parosSzamokSzamlalo;
}
let eredmeny = parosSzamokSzama(inputTomb);
console.log("A páros számok száma:" + eredmeny);

// 2. Írj egy függvényt, ami összeadja a tömbben lévő számokat

console.log('2. Írj egy függvényt, ami összeadja a tömbben lévő számokat!')

function szamokatOsszead(tomb2) {
    let osszeg = 0;

    for (let index = 0; index < tomb2.length; index++) {
        osszeg += tomb2[index]; 
    }
    return osszeg;
    
}

let szamok = [5,5,5,5,5,5,5,5];
let megoldas = szamokatOsszead(szamok);

console.log("A tömbben lévő számok összege: " + megoldas )

// 17. Hozz létre egy programot, amely ellenőrzi egy szó hosszát. Ha a szó hosszabb,
//  mint 5 karakter, írja ki a "Hosszú szó!" üzenetet, különben írja ki a "Rövid szó!" üzenetet.
const szo = prompt("Addjon meg egy szót:");


if (szo.length  > 5 ) {
    console.log("Hosszú szó")
    
}
else {
    console.log("Rövid szó")
}

//15. Készíts egy egyszerű számológépet a következő műveletekkel: összeadás,
// kivonás, szorzás, osztás. Kérj be két számot és egy műveletet a felhasználótól, majd hajtsd végre a kívánt műveletet.

const szam1 = prompt("Addj meg egy számot:")
const newLocal = "Addj meg egy másik számot:";
const szam2 = prompt(newLocal)
const newLocal1 = "Addj meg egy műveletet (+,-,*,/)"
const muvelet = prompt(newLocal1)

const num1 = parseFloat(szam1);
const num2 = parseFloat(szam2);

let osszeadas = szam1 + szam2
let kivonas = szam1 - szam2
let szorzas = szam1 * szam2
let osztas = szam1 / szam2





if (isNaN(num1) || isNaN(num2))  {
    console.log("Hibás bemenet, addj meg érvényes számot!")
} else {
    switch (muvelet) {
        case "+" :
            muvelet_eredmenye = num1 + num2;
            break;
            case "-" :
            muvelet_eredmenye = num1 - num2;
            break;
            case "*" :
            muvelet_eredmenye = num1 * num2;
            break;
            case "/" :
            muvelet_eredmenye = num1 / num2;
    
        default:
            console.log("Hibás művelet. Kérlek adj meg érvényes műveletet!")
            break;
    }
    console.log('A művelet eredménye:' + muvelet_eredmenye);
}