// Nome
var name;

var name = prompt("Qual è il tuo nome?");

//Cognome
var surname;

var surname = prompt("Qual è il tuo cognome?");

document.getElementById("title").innerHTML = name + " " + surname;

// Colore
var favcolor;

var favcolor = prompt("Qual'è il tuo colore preferito?");

document.getElementById("color").innerHTML = favcolor;

// Password poco sicura
document.getElementById("parag").innerHTML = "La tua password idiota:"
document.getElementById("password").innerHTML = name + surname + favcolor + 19
