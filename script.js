prompt("Your name?", "Anna");
prompt("Their name?", "John");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  document.write("Your love score is " + loveScore + "%" + " Your love like kanye loves kim"); 
} else {
  document.write("Your love score is " + loveScore + "%");  
}