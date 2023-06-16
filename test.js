function formValidate() {
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");
  var text = "";

  if (email.indexOf("@") == -1 || email.length < 11) {
    text = "Please Enter Valid Email";
    error.innerHTML = text;
    return false;
  }
  else if (isNaN(phone) || phone.length < 11) {
    text = "Please Enter Valid Phone";
    error.innerHTML = text;
    return false;
  
  }
  else if (password.length < 8) {
    text = "Please Enter Valid Password";
    error.innerHTML = text;
    return false;
  }
  else{
    alert("Done Login")
  }
}

























// FormSignUp
function formSignup() {
  var fristName = document.getElementById("frist").value;
  var _surName = document.getElementById("surName").value;
  var _email = document.getElementById("emAddress").value;
  var mobile = document.getElementById("mob").value;
  var newPassword = document.getElementById("newPass").value;
  var newError = document.getElementById("_error");
  var note = "";

  if (fristName .length < 8) {
    note = "Please Enter Valid Frist Name";
    newError.innerHTML = note ;
    return false;

  }
  else if (_surName .length < 8) {
    note = "Please Enter Valid Last Name";
    newError.innerHTML = note ;
    return false;

  }
  else if (_email.indexOf("@") == -1 || _email .length < 8) {
    note = "Please Enter Valid Email";
    newError.innerHTML = note ;
    return false;

  }
  else if (isNaN(mobile)|| mobile .length < 8) {
    note = "Please Enter Valid Mobile Phone";
    newError.innerHTML = note ;
    return false;
  }
  else if ( isNaN(newPassword) || newPassword .length < 8) {
    note = "Please Enter Valid Password";
    newError.innerHTML = note ;
    return false;

  }
  else{
    alert("Doneeeeeeee Create New Account ")
  }
}
