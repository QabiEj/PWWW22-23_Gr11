function validateForm() {
    //Name validation
    var x = document.forms["contactform"]["firstname"].value;
    if (!x.match(/^[a-zA-Z ]{2,30}$/)) {
      alert("Name must be filled out correctly");
      return false;
    }
    //LastName validation
    var x = document.forms["contactform"]["lastname"].value;
    if (!x.match(/^[a-zA-Z ]{2,30}$/)) {
      alert("Lastname must be filled out correctly");
      return false;
    }

      var x = document.forms["contactform"]["lastname"].value;
    if (!x.match(/^[a-zA-Z ]{2,30}$/)) {
      alert("Lastname must be filled out correctly");
      return false;
    }
  

    //Email
      var x = document.forms["contactform"]["email"].value;
      var atpos = x.indexOf("@");
      var dotpos = x.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      alert("Not a valid e-mail address");
      return false;
    }
    //select - options
         if (document.getElementById("subject").selectedIndex == 0) {
         alert("A subject must be choosen");
         return false;
       }
    //age - radio button
      var age = document.getElementsByName('age');
          var ageValue = false;
          for(var i=0; i<age.length;i++){
              if(age[i].checked == true){
                  ageValue = true;    
              }
          }
          if(!ageValue){
              alert("Age must be choosen");
              return false;
          }
      //checkbox
          var answer = document.getElementsByName('answer');
          var ansValue = false;
          for(var i=0; i<answer.length;i++){
              if(answer[i].checked == true){
                  ansValue = true;    
              }
          }
          if(!ansValue){
              alert("An answer must be choosen");
              return false;
          }
      // textarea
         if (document.getElementById("message").value == "" ) {
         alert("Message must be filled out");
         return false;
          }

        //subscribe__form
    var x = document.forms["subscribe__form"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Not a valid e-mail address");
    return false;}
  
}

      function validateLogin(){
             //Password validation
      var x = document.forms["loginform"]["pass"].value;
      var r =document.forms["loginform"]["repass"].value;
          if(!x.match(/^[a-zA-Z0-9]{8,}$/)){
            alert("Password must be contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
            return false;
          }
          if(!r.match(/^[a-zA-Z0-9]{8,}$/)){
            alert("Password must be contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
            return false;
          }
          if (!(x == r)) {
          alert("Passwords are not the same, please try again");
            return false;
      }
      }