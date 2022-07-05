// Objects

// An sich eine Sammlung von Schlüssel:Wert Paaren
// Diese Schlüssel nenn wir Properties
// Außer wenn es sich bei den Werten dieser properties um Funktionen handelt 
// Dann sprechen wir von Methoden

// Wie initialisiere ich Objekte?
// 3 versch. Möglichkeiten:
// 1. object literal
const objectLiteral = {
    "name" : "Max Mustermann",
    "age": 15,
    "employed": true,
    "cityOfOrigin": "Munich"
};
// Property-Namen können auch ohne "" oder '' definiert werden
// Anführungszeichen sind erst absolut notwendig wenn es sich beim prop-Namen nicht um einen gültigen JS Identifier handelt
// Kann mit oder ohne trailing Komma definiert werden

// 2. constructor
const constructedObject = new Object();
// Erstellt ein bis dato leeres Objekt

// 3. shorthand
// Gibt es ES6

let person2Name = "Erika Musterfrau";
let person2Age = 22;
let person2Employed = true;
let person2CityofOrigin = "Vienna";

const shorthandObject = {
    person2Name,
    person2Age,
    person2Employed,
    person2CityofOrigin
};

// Beim shorthand wird nun der Identifier der Variable zum Namen des Props und der Wert der Variable wird der Wert des Props

// Wie greife ich auf Props eines Objektes zu?
// 1. Bracket-Notation
// Objekte verfügen nicht über indizes
console.log(objectLiteral["name"]); // => Max Mustermann
console.log(shorthandObject["person2Name"]) // => Erika Musterfrau
// Die Bracket Notation funktioniert immer, auch wenn es sich beim Namen des Props um keinen gültigen Identifier handelt, z.B. wenn dieser leerzeichen enthält

// 2. dot-Notation
console.log(objectLiteral.cityOfOrigin); // => Munich
console.log(shorthandObject.person2Age); // => 22
// Die dot-Notation funktioniert nur mir Prop-Namen, die gültige JS-Identifier sind
// console.log(objectLiteral.city of Origin);
// Würde nicht gehen,da Leerzeichen im Prop-Namen enthalten sind

// Wie erstelle ich dynamische Props?
// 
