function readmore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
}