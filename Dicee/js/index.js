
function result(){
  var randomnumber1 = Math.floor(Math.random() * 6 + 1);
  var randomnumber2 = Math.floor(Math.random() * 6 + 1);

  document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomnumber1+".png");
  document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+randomnumber2+".png");
  if(randomnumber1>randomnumber2){
    document.querySelector("h2").innerHTML = "<i class='fa fa-trophy colors' aria-hidden='true'></i>  Player 1 Wins!";
  }
  else if (randomnumber1<randomnumber2) {
    document.querySelector("h2").innerHTML = "<i class='fa fa-trophy colors' aria-hidden='true'></i>  Player 2 Wins!";
  }
  else{
    document.querySelector("h2").innerHTML = "Draw!";
  }
}


  $(document).ready(function(){
    result();
    $(refresh).click(result);
  });
