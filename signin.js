
function validatePassword(field1, field2) {
    if(field1==''||field2==''){
      document.getElementById("b2").style.borderColor= "red";
      document.getElementById("a2").innerHTML='You must enter a password';
      return 'You must enter a password';
    }
    
    else
    return '';
  }



  function validateEmail(field4){
    if(field4== ""){
      document.getElementById("b1").style.borderColor= "red";
    document.getElementById("a1").innerHTML='You Must Enter an email';
      return 'You Must Enter a email';
    }
    else
    return '';
  }

  function validate(form) {
 let fail = '';
 fail += validatePassword(form.password.value);
 fail += validateEmail(form.Email.value);
 
 
  
  if (fail == ''){
      return true;
  }
  else {
      
      return false;
  }
}