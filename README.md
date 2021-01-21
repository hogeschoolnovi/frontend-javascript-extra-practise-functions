# Opdrachtbeschrijving

De oprachten in `functions.js` zijn onverdeelt in beginner, intermediate en advanced. Zorg ervoor dat je de functies altijd een 
waarde laat teruggeven dit logt in de console.

**Doe dit niet:**
```javascript
function example(word) {
  console.log(word);
}

example("Koekjes");
```

**Doe dit wel:**
```javascript
function example(word) {
  return word;
}

// we loggen wat er terugkomt uit de functie in de console
console.log(example("Koekjes"));

// OF je slaat de uitkomst op in een variabele en stopt dát in de console.log():
const outcome = example("Koekjes");
console.log(outcome);
```

Om dit in de terminal te zien, gebruik je het commando

`nodemon functions.js` 

om het script in de terminal te runnen.