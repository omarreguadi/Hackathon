//on duplique l'element  
function cloneElement(id){
    //-- On Recupere l'objet source
    var src = document.getElementById(id);
  
    if(src){
      //-- clone le formulaire
      var clone = src.cloneNode(true);
      clone.id = "sub";
     
      //-- Ajout du clone
      document.getElementById("subFormlaire").appendChild(clone);
      //on incremente une var pour ne pas depasser 5 etudiants
       Form4++;
     console.log(Form4);
      if (Form4 == 4)
          document.getElementById("btn").style.display = 'none';
    }
  }
  
  let Form4 = 0;
  
  document.getElementById("btn").addEventListener("click", function(){cloneElement("form")}, false); 