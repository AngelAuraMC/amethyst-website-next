/* 
ThatStella7922 Landing Website "quotes" Handler
No I didn't have a better name for it

v2025.0502.0
*/

// Globals
const currentFullDate = new Date();
var currentMonth = currentFullDate.getMonth() + 1;
var currentDay = currentFullDate.getDate(); 
// End Globals

// Quotes
const quotes = [
    "flint and STEEL",
    "this is a CRAFTING TABLE",
    "Water bucket! RELEASE",
    "CHICKEN JOCKEY",
    "ENDER PEARLL"
];

function getRandomQuote() {
  var quote = quotes[~~(Math.random() * quotes.length)];
  return quote;
}

function setQuotesText() {
  switch (currentMonth) {
    // Switch statement for months, each month case can have a switch statement for days too
    case 3:
      switch (currentDay) {
        default:
          var quoteText = getRandomQuote();
          break;
      }
      break;

    case 6:
      switch (currentDay) {
        default:
          var quoteText = getRandomQuote();
          break;
      }
      break;

    case 7:
      switch (currentDay) {
        default:
          var quoteText = getRandomQuote();
          break;
      }
      break;

    case 10:
      switch (currentDay) {
        default:
          var quoteText = getRandomQuote();
          break;
      }
      break;

    default:
      var quoteText = getRandomQuote();
      break;
  }

    //console.log("setQuotesText() returned the following string:\n" + randomText);
    document.getElementById('quotep').innerHTML = quoteText;
}

// SHHHH SECRET
function manualSetQuotesText() {
  manualQuote = prompt("You found the secret!\nEnter the desired quote text:", document.getElementById('quotep').innerHTML);
  if (manualQuote != null) {
    document.getElementById('quotep').innerHTML = manualQuote;
  }
}

// End Quotes