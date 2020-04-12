const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');
const loginform = document.getElementById('loginform');
const loginusername = document.getElementById('loginusername');
const loginpassword = document.getElementById('loginpassword');

/// functions


function showError(input,message) {
    const manipulateErrorlateDiv = input.parentElement; 
    manipulateErrorlateDiv.className = 'form-control error';
    const small = manipulateErrorlateDiv.querySelector('small');
    small.innerText = message;
    

};  

// Show success
function showSuccess(input) {
    const manipulateSuccesslateDiv = input.parentElement;
    manipulateSuccesslateDiv.className = 'form-control success';
};

/// check required register

function checkRequired(inputArr,message){

    inputArr.forEach(input => {
        if (input.value.trim() === '') {
          
            showError(input,`${fieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    });
};

function checkRequiredLogin(inputArrLogin, message) {
  console.log(inputArrLogin)

  inputArrLogin.forEach(input => {
  
    if(input.value.trim() === '') {
      console.log(input.value)
      showError(input, `${fieldNameLogin(input)} must not be empty`)
    } else {
      showSuccess(input)
    }
  })
}

/// checck length
function checkLength(input,min,max) {
    if (input.value.length < min) {
        showError(input, `${fieldName(input)} must be minimum ${min} characters` );
    } else  if (input.value.length > max) {
        showError(input,`${fieldName(input)} must be less than ${max} characters`) ;  
    } else {
        showSuccess(input);
    }
};



function checkLoginLength(input,min,max) {
  if (input.value.length < min) {
      showError(input, `${fieldNameLogin(input)} must be minimum ${min} characters` );
  } else  if (input.value.length > max) {
      showError(input,`${fieldNameLogin(input)} must be less than ${max} characters`) ;  
  } else {
      showSuccess(input);
  }
};

//// check password match

function checkPasswordMatch(input1,input2) {
  if (input1.value !== input2.value) {
      showError(input2,'Passwords must match')
  } else{
    showSuccess(input)
  }
}

/// check password 

function checkPassword(inputtxt)  { 
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if(inputtxt.value.match(passw)) { 
  showSuccess(inputtxt);
  } else { 
  showError(inputtxt,'Password must have Capital letter');}
};



function fieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};


function fieldNameLogin(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1,5) + " " + input.id.charAt(5).toUpperCase() + input.id.slice(6);
};
 

// Add events Listner

form.addEventListener('submit', function (e) {

    e.preventDefault();

    console.log('hdhdhdhdh')

    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 8);
    checkLength(password, 6, 10);
    checkPasswordMatch(password,password2);
    checkPassword(password)

});

loginform.addEventListener('submit',function(e) {
      e.preventDefault(e)
      checkRequiredLogin([loginusername,loginpassword]);
      checkLoginLength(loginusername, 3, 8);
      checkLoginLength(loginpassword, 6, 10);

     
      
})



