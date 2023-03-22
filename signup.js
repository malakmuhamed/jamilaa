
function validateFullname(field) {
    if (field == ""){
      document.getElementById("b").style.borderColor="red";
      document.getElementById("a").innerHTML='You Must Enter a Username.';
      return 'You Must Enter a Username.';
    }
    else
    return '';
  }


  function validatePassword(field1, field2) {
    if(field1==''||field2==''){
      document.getElementById("b2").style.borderColor= "red";
      document.getElementById("a2").innerHTML='You must enter a password';
      return 'You must enter a password';
    }
    else if(field1!=field2){
      document.getElementById("b3").style.borderColor= "red";
      document.getElementById("a3").innerHTML='You must enter a matching password';
      return 'You must enter a matching password.';
    }
    else
    return '';
  }


  function valiatepass(field1) {
    
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (field1.match(decimal)) {
      
      return '';

    }
    else if(!field1.match(decimal)){
      document.getElementById("a2").innerHTML = 'You must enter a passwod 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character ';
      return 'You must enter ';

    }
  }









  function validateDOB(field3) {
    let dob=new Date(field3);
    let diff=Date.now()-dob.getTime();
    let age=new Date(diff);
    if(Math.abs(age.getUTCFullYear()-1970)>=18){
      return '';
        }
        else{
         
    document.getElementById("a4").innerHTML='You Must be-older than 18 years.';
      return 'You Must be-older than 18 years.';
        }
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
 fail += validateFullname(form.Fullname.value);
 fail += validatePassword(form.password.value, form.confirm_password.value);
 fail += valiatepass(form.password.value);
 fail += validateEmail(form.Email.value);
 fail += validateDOB(form.dob.value);
 
  
  if (fail == ''){
      return true;
  }
  else {
      
      return false;
  }
}