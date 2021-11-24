function readmore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none"&&btnText.innerHTML === "Lire la suite...") {
    btnText.innerHTML = "Lire moins";
    moreText.style.display = "inline";
  } 
    else {
    btnText.innerHTML = "Lire la suite...";
    moreText.style.display = "none";
  }
}
