prompt("Your name?", "Anna");
prompt("Their name?", "John");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + " Your love each other like Raimaly loves Begimay!</h1>"); 
} else if (loveScore > 30) {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + " Keep going!</h1>");
} else {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + " Sorry!</h1>");  
}