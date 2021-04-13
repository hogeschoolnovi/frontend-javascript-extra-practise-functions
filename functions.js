// -------------------------------  LEVEL 1


/* Opdracht 1 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

function isBiggerThanZero(number) {
  if (number > 0) {
    return true;
  }

  // als bovenstaande statement niet waar is, komen we automatisch aan bij deze return statement
  return false;
}

const outcomeOne = isBiggerThanZero(-3);
const outcomeTwo = isBiggerThanZero(0);
const outcomeThree = isBiggerThanZero(300);
console.log(outcomeOne, outcomeTwo, outcomeThree);


/* Opdracht 2 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

function isBiggerThanHundred(a, b) {
  if (a + b > 100) {
    return true;
  }

  return false;
}

// kan zelfs nog korter, omdat de uitkomst van de bewering al true of false is
// function isBiggerThanHundred(a, b) {
//   return a + b > 100
// }

const outcome = isBiggerThanHundred(89, 14);
console.log(outcome);


/* Opdracht 3 */
// Schrijf een functie die een zin verwacht en de eerste letter uit de zin omzet naar een hoofdletter.
// ---- Verwachte uitkomsten:
// 'de kat krabt de krullen van de trap' geeft 'De kat krabt de krullen van de trap'
// 'programmeren is super leuk!' geeft 'Programmeren is super leuk!'

function capitalize(sentence) {
  const firstLetter = sentence[0];
  // wanneer we geen tweede waarde aan slice geven, wordt alles na het startpunt (1) meegenomen
  const rest = sentence.slice(1);

  return firstLetter.toUpperCase() + rest;
}

const result = capitalize('de kat krabt de krullen van de trap');
console.log(result);


/* Opdracht 4 */
// Schrijf een functie die een argument verwacht en het datatype teruggeeft (boolean, object, undefined, number, string,function)
// Tip: gebruik typeof (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
// { name: 1 } geeft object
// undefined geeft undefined
// 'Hallo' geeft string
// [1, 2, 3] geeft object (ja echt!)

function whatType(data) {
  return typeof data;
}

const dataTypeOne = whatType({ name: 1 });
const dataTypeTwo = whatType(undefined);
const dataTypeThree = whatType([1, 2, 3]);
console.log(dataTypeOne, dataTypeTwo, dataTypeThree);


/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is, weet je niet van tevoren,
// dus het moet werken voor alle lengtes. Zelfs voor een lengte van 100 (dus niet één voor één uitschrijven!)
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ['abra', 'cadabra'] geeft 'abracadabra'
// ['a', 'b', 'c', 'd', 'e'] geeft 'abcde'

function concatenate(wordArray) {
  let output = '';

  for (let i = 0; i < wordArray.length; i++) {
    output = output + wordArray[i];
  }

  return output;
}

const joinedString = concatenate(['a', 'b', 'c', 'd', 'e']);
console.log(joinedString);


/* Opdracht 6 */
// Schrijf een functie die een zin verwacht en het langste woord uit die zin teruggeeft. Als er meerdere woorden het langst zijn, wordt het laatste langste woord terug gegeven.
// ---- Verwachte uitkomsten:
// 'Frontend web development' geeft 'development'
// 'De eindopdracht telt voor 30 ECTS' geeft 'eindopdracht'
// 'Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken.' geeft 'technologie'

function findLongestWord(sentence) {
  // maak een lege variabele om het langste woord in op te slaan
  let longestWord = '';
  // zet de zin op basis van spaties om naar een array met woorden
  const wordArray = sentence.split(' ');

  for (let i = 0; i < wordArray.length; i++) {
    const currentWord = wordArray[i];

    if (currentWord.length >= longestWord.length) {
      // sla dan dit woord op in onze 'container'
      longestWord = currentWord;
    }
  }

  return longestWord;
}

const subjectOne = findLongestWord('De eindopdracht telt voor 30 ECTS');
const subjectTwo = findLongestWord('Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken.');
console.log(subjectOne, subjectTwo);


// -------------------------------  LEVEL 2

/* Opdracht 6 */
// 6a. Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde methoden doen, de keus is aan jou.
// ---- Verwachte uitkomsten:
// 'koekje' geeft 'ejkeok'
// 'vrienden' geeft 'nedneirv'

// OPTIE 1: FOR-LOOP
function reverseWord(word) {
  let reversed = '';

  // let op: deze for-loop telt af! Dus we beginnen aan het einde (word.length - 1) en gaan door tot i kleiner wordt dan 0.
  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
  }

  return reversed;
}

const reversed = reverseWord('vrienden');
console.log(reversed);

// OPTIE 2: STRING METHODEN
function reverseWordMethod(word) {
  // eerst stop je alle letters afzonderlijk in een array
  const letterArray = word.split('');
  // daarna draai je de volgorde van de array om (dit kan niet op een gewone string)
  const letterArrayReversed = letterArray.reverse();
  // dan voeg je alle items in de array samen tot één string
  const letterString = letterArrayReversed.join('');
  // voilá, je woord is omgedraaid!
  return letterString;

  // side note: dit kan ook allemaal achter elkaar in één zin:
  // return word.split('').reverse().join();
}

const reversedWordTwo = reverseWordMethod('lepel');
console.log(reversedWordTwo);

// 6b. Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false




/* Opdracht 7 */
// Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// 'lepel' geeft true
// 'madam' geeft true
// 'vrienden' geeft false

function isPalindrome(word) {
  let reversed = '';

  // let op: deze for-loop telt af! Dus we beginnen aan het einde (word.length - 1) en gaan door tot i kleiner wordt dan 0.
  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
  }

  if (reversed === word) {
    return true;
  }

  return false;

  // dit kan nog korter door direct de statement uit de if te returnen:
  // return reversed === word;
}


/* Opdracht 7 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor géén string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2

function howManyTimes(sentence, letter) {
  let amount = 0;

  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
    if (sentence[i] === letter) {
      amount++
    }
  }

  return amount;
}

const amountOfE = howManyTimes('Hans en marietje lopen naar de supermarkt', 'e');
console.log(amountOfE);


/* Opdracht 8 */
// Schrijf een functie die bij iedere aanroep een random string id genereert van 8 tekens. Er mag gebruik gemaakt worden van de volgende karakters:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// ---- Verwachte (mogelijke) uitkomsten:
// iizdX7Ax
// gajxBhGs

function generateId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // bovenstaande string met optionele karakters is 62 letters lang (dus kunnen we characters op indexnummer 0 tot 61 kiezen: length - 1)
  const lastIndexNumber = characters.length - 1;

  // maak een lege container variabele
  let uniqueId = '';

  // laat de for-loop 8 keer loopen (we hebben immers 8 tekens nodig)
  for (let i = 0; i < 8; i++) {
    // genereer iedere keer een random getal tussen 0 en 1
    const randomNumber = Math.random();
    // maak hier een heel getal van tussen 0 en het maximale indexnummer 61
    const indexOfPickedCharacter = Math.round(randomNumber * lastIndexNumber);

    // Voeg nu dit karakter toe aan de string die we al hadden
    uniqueId = uniqueId + characters[indexOfPickedCharacter];
  }

  return uniqueId;
}

const idA = generateId();
const idB = generateId();
console.log(idA, idB);



// ------------------------------- LEVEL 3 (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Let op: Als er een getal als tweede argument wordt meegegeven (de parameter n), worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 8]) geeft 8
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

function lastEntry(array, n) {
  const lastEntryIndex = array.length;

  // we kunnen checken of n is meegegeven, want als dat niet zo is zal hij undefined zijn
  if (n === undefined) {
    // geen n? Geef dan de laatste entry terug (length - 1)
    return array[lastEntryIndex - 1];
  }

  // wel een n? Geef dan alles terug vanaf het einde - n hoeveelheid entries
  return array.slice(lastEntryIndex - n)
}

const resultOne = lastEntry([3, 6, 9, 17, 4, 6, 25, 8]);
const resultTwo = lastEntry([46, 65, 34, 204, 190, 89], 3);
console.log(resultOne, resultTwo);


/* Opdracht 10 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je 'Fizz' in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je 'Buzz' in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je 'FizzBuzz'.
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.

// OPTIE 1, MET OUTPUT VARIABELE
function fizzBuzzOne() {
  for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    console.log(output || i);
  }
}

// console.log(fizzBuzzOne());

// OPTIE 2, MET DIRECTE CONSOLE.LOG()
function fizzBuzzTwo() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// console.log(fizzBuzzTwo());

/* Opdracht 11 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft, ongeacht hoeveel items er in de array staan.
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"


function greeting(wordsArray) {
  let greeting = "Hoi ";

  for (let i = 0; i < wordsArray.length; i++) {
    // LAATSTE WOORD: mocht dit de laatste loop zijn, voeg dan het uitroepteken toe
    if (i === wordsArray.length - 1) {
      // de return zorgt ervoor dat we hierna uit de loop breken
      return greeting = greeting + " en " + wordsArray[i] + "!";
    }

    // EEN-NA-LAATSTE WOORD: als de array uberhaupt maar twee namen bevat of we zijn bij de één-na-laatste,
    // voeg dan alleen de naam toe (geen komma)
    if (wordsArray.length === 2 || i === wordsArray.length - 2) {
      greeting = greeting + wordsArray[i];
    } else {
      // ALLES DAARVOOR: in andere alle gevallen voegen we een komma en spatie toe
      greeting = greeting + wordsArray[i] + ", ";
    }
  }

  return greeting;
}

const firstGreeting = greeting(["Piet", "Henk"]);
const secondGreeting = greeting(["A", "B", "C", "D", "E", "F"]);
console.log(firstGreeting, secondGreeting);
