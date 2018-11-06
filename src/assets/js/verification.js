function testUsernameNumber(userName) {
  let username = document.getElementsByClassName("username")[0];
  let label = document.getElementsByClassName("username-label")[0];
  let phone = testPhoneNumber(userName);
  let email = testEmailNumber(userName);
  if(phone||email){
    label.style.visibility = "hidden";
    username.style.borderColor = "#FFCC33";
    return true;
  }
}

function testPhoneNumber(userName) {
  let username = document.getElementsByClassName("username")[0];
  let label = document.getElementsByClassName("username-label")[0];
  if(userName.length == 0){
    label.style.visibility = "visible";
    username.style.borderColor = "#DC143C";
    return false;
  }
  else if(userName.length != 11){
    label.style.visibility = "visible";
    username.style.borderColor = "#DC143C";
    return false;
  }

  let number = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if(!number.test(userName)){
    label.style.visibility = "visible";
    username.style.borderColor = "#DC143C";
    return false;
  }

  label.style.visibility = "hidden";
  username.style.borderColor = "#FFCC33";
  return true;
}

function testEmailNumber(userName) {
  let username = document.getElementsByClassName("username")[0];
  let label = document.getElementsByClassName("username-label")[0];
  let email = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  if(!email.test(userName)){
    label.style.visibility = "visible";
    username.style.borderColor = "#DC143C";
    return false;
  }
  label.style.visibility = "hidden";
  username.style.borderColor = "#FFCC33";
  return true;
}

function testEnrollEmailNumber(Email) {
  let username = document.getElementsByClassName("email")[0];
  let label = document.getElementsByClassName("email-label")[0];
  if(Email.length == 0){
    label.style.visibility = "visible";
    username.style.borderColor = "#DC143C";
    return false;
  }
  let email = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  if(!email.test(Email)){
    label.style.visibility = "visible";
    username.style.borderColor = "#DC143C";
    return false;
  }
  label.style.visibility = "hidden";
  username.style.borderColor = "#FFCC33";
  return true;
}

function testPassword(Password) {
  let password = document.getElementsByClassName("password")[0];
  let label = document.getElementsByClassName("password-label")[0];
  if(Password.length == 0){
    label.style.visibility = "visible";
    password.style.borderColor = "#DC143C";
    return false;
  }
  else if(Password.length < 6){
    label.style.visibility = "visible";
    password.style.borderColor = "#DC143C";
    return false;
  }
  else if(Password.length > 30){
    label.style.visibility = "visible";
    password.style.borderColor = "#DC143C";
    return false;
  }
  label.style.visibility = "hidden";
  password.style.borderColor = "#FFCC33";
  return true;
}

function testPasswordCompare(password1,password2) {
  let label = document.getElementsByClassName("password-again-label")[0];
  let password = document.getElementsByName("password_again")[0];
  if(password1 != password2){
    label.style.visibility = "visible";
    password.style.borderColor = "#DC143C";
    return false;
  }
  else{
    label.style.visibility = "hidden";
    password.style.borderColor = "#FFCC33";
    return true;
  }
}

export {
  testUsernameNumber,
  testPhoneNumber,
  testEmailNumber,
  testPassword,
  testPasswordCompare,
  testEnrollEmailNumber
}
