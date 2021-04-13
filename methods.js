// We hebben een array met e-mailaddressen van medewerkers in ons systeem.

const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];

/* Opdracht 1 */
// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl.

emailadresses.push('m.westerbroek@novi.nl');
console.log(emailadresses);

// 1b. Er zullen ongetwijfeld vaker emailadressen toegevoegd moeten worden. Binnen het bedrijf zijn er echter lijsten voor medewerkers,
// maar ook voor studenten. Schrijf een herbruikbare functie die een email-lijst en nieuw-emailadres verwacht en deze vervolgens toevoegt aan die lijst.

function addEmail(list, email) {
  list.push(email);
}

/* Opdracht 2 */
// 1a. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit! Zijn emailadres is n.stuivenberg@novi.nl

const isNickInTheList = emailadresses.includes('n.stuivenberg@novi.nl');
console.log(isNickInTheList);

// 1b. Schrijf een herbruikbare functie die een email-lijst en achternaam verwacht. Wanneer er een emailadres met die achternaam voorkomt, wordt het emailadres teruggegeven.
// Als er niets wordt gevonden, returnt de functie null.

// als we nu emailaddresses.includes(lastname) zouden doen, werkt dit niet, omdat de volledige entry met de zoekterm vergeleken wordt.
// We moeten dus per emailadres gaan kijken of daar een deel van de achternaam in voorkomt.
function findEmailByLastname(list, lastname) {
  // zet het resultaat vast op null, als we dan niets vinden, returnen we dit
  let result = null;

  for (let i = 0; i < list.length; i++) {
    const currentEmail = list[i];

    // als de achternaam (gedeeltelijk) voorkomt in dit emailadres, overschrijven we onze result variabele
    if (currentEmail.includes(lastname)) {
      result = currentEmail;
    }
  }

  return result;
}

const findNova = findEmailByLastname(emailadresses, 'eeken');
const findKlaas = findEmailByLastname(emailadresses, 'Klaassen');
console.log(findNova, findKlaas);

/* Opdracht 3 */
// 3a. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zjin komen werken. Nu blijkt echter dat een andere nieuwe collega, Tess,
// bij Novi is komen werken vóór Melissa. Haar e-mailadres (t.mellink@novi.nl) moet dus worden toegevoegd op de één na laatste plek.
// Let op: je weet niet hoe lang de lijst is!

const insertIndex = emailadresses.length - 1;
// splice geven we het invoeg-punt, aantal items om te verwijderen (0) en het item om toe te voegen mee
emailadresses.splice(insertIndex, 0, 't.mellink@novi.nl');
console.log(emailadresses);


// 3b. Bij de vorige vraag wisten we gelukkig waar Melissa stond in de lijst. Maar soms weten we dat niet! Schrijf een functie die emailadres Y bijvoegt in de lijst vóór emailadres Z.

function insertBefore(list, emailY, emailZ) {
  const indexOfZ = list.indexOf(emailZ);

  // splice geven we het invoeg-punt, aantal items om te verwijderen (0) en het item om toe te voegen mee
  list.splice(indexOfZ, 0, emailY);
}

insertBefore(emailadresses, 'klaas@novi.nl', 't.mellink@novi.nl');
console.log(emailadresses);

/* Opdracht 4 */
// Er staat een foutje in de lijst. Het email adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
// op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
// een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie

function replaceEmail(emailList, wrongEmail, replacementEmail) {
  const indexOfWrongEmail = emailList.indexOf(wrongEmail);
  // ons geval staat hier eigenlijk, emailadresses[2] = m.vandergeest@novi.nl
  emailList[indexOfWrongEmail] = replacementEmail;
}

replaceEmail(emailadresses, 'm.vandergeest@novi-education.nl', 'm.vandergeest@novi.nl');
console.log(emailadresses);