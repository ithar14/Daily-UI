//variables
var Quotes = ['Behind every exquisite thing that existed, there was something tragic.','Beauty is how you feel inside, and it reflects in your eyes. It is not something physical.','The darkening of the world makes the irrationality of art rational: radically darkened art.','The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.','Art is the lie that enables us to realize the truth.'];

var Authors = ['Oscar Wilde','Sophia Loren','Theodor W. Adorno','Albert Einstein','Pablo Picasso'];
        
var Images=['https://cdn.britannica.com/21/94621-050-58D29508/Oscar-Wilde-1882.jpg','https://lh3.googleusercontent.com/proxy/Uf0UAKUxKAyAbeJroy0kF1nBNwyq-6g3Huc93DL3qYaSzMiHPg0TWvM5gj0UuTNa0_GbEDCc5uBTPWBFTiJu2ijR9J2_wOrXKkNqgWA0HXzAHY99Sb5h8FlTB-fEmdr89wY3-msmEyBxkpxwbUkcZZ_jKcY5XqgG6VGzX5ecm6-J-SMzWA5gdmjT0TyzLvhk97depmPo','https://www.uni-frankfurt.de/68889837/ADORNO__Theodor_Universit%C3%A4tsarchiv_Frankfurt.jpg','https://www.nobelprize.org/images/einstein-12923-portrait-medium.jpg','https://www.montmorencylibrary.com/picasso.jpg/@@images/image.jpeg'];

var Colours = ['#FFF59D','#A5D6A7','#B39DDB','#EF9A9A','#D7CCC8'];
              
function newQuote(){
 //Random Number 
  var RdNum = Math.floor(Math.random()*Quotes.length);
 //onclick
  document.getElementById("text").innerHTML =Quotes[RdNum];
  
  document.getElementById("author").innerHTML =Authors[RdNum];
 
  document.randimg.src = Images[RdNum];
  
  document.body.style.backgroundColor = Colours[RdNum];
  
 document.getElementById("button").style.backgroundColor = Colours[RdNum];
  
  document.getElementById("image").style.backgroundColor = Colours[RdNum];
}