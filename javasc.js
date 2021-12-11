function readmore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display == "") {
    btnText.innerHTML = "Lire moins";
    moreText.style.display = "inline";
  } 
    else {
    btnText.innerHTML = "Lire la suite...";
    moreText.style.display = "";
  }
}

function verif_formulaire1() {
  if(document.getElementById("uname").value == "")  {
   window.alert("Veuillez entrer votre nom!");
  }
   
  if(documente.getElementById("psw").value == "") {
    window.alert("Veuillez entrer votre mot de passe!");
  }

  if(document.getElementById("formulaire").getElementById("psw").value.length("i") < "8"
  || document.getElementById("psw").value.length("i") > "20"){
    window.alert("Cette mot de passe n'est pas entre 8 et 20 caracteres!");
 }
}


function verif_formulaire2() {
  if(document.getElementById("email").value == "")  {
    window.alert("Veuillez entrer votre email!");
   }

  if(document.getElementById("uname").value == "")  {
    window.alert("Veuillez entrer votre nom!");
   }

  if(documente.getElementById("psw").value == "") {
    window.alert("Veuillez entrer votre mot de passe!");
   }
  
  if(document.getElementById("psw").value.length(i) < "8"
    || document.getElementById(psw).value.length(i) > "20"){
      window.alert("Cette mot de passe n'est pas entre 8 et 20 caracteres!");
   }

  if(!(documente.getElementById("psw").value == documente.getElementById("psw-repeat").value)) {
    window.alert("Les deux Mot de passes ne sont pas identiques");
   }
}

function verif() {
  confirm("êtes-vous sûr?");
}