
var quotes = [
 {
    quote:" “Be yourself; everyone else is already taken.” ",
    author:"― Oscar Wilde"
 }
,
 {
    quote:" “So many books, so little time.” ",
    author:"― Frank Zappa"
 }
,
 {
    quote:" “A room without books is like a body without a soul.” ",
    author:"― Marcus Tullius Cicero"
 }
 ,
  {
    quote:" “You only live once, but if you do it right, once is enough.” ",
    author:"― Mae West"
 }
 ,
  {
    quote:" “Be the change that you wish to see in the world.” ",
    author:"― Mahatma Gandhi"
 }
];


function AddQuote() {
for( i = 0; i < Math.random()*quotes.length; i++){
var newCode = `
<p id="quote">${quotes[i].quote}</p>
<p id="author">${quotes[i].author}</p>

`
}
// newCode.push()

document.getElementById("quoteSec").innerHTML = newCode;
}

