const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');

/// functions

console.log('here now now')

function showError(input,message) {
    const manipulateErrorlateDiv = input.parentElement; 
    manipulateErrorlateDiv.className = 'form-control error';
    // const small = manipulateErrorlateDiv.querySelector('small');
    // small.innerText = message;
    const small = manipulateErrorlateDiv.querySelector('small');
    small.innerText = message;
    

};  

// Show success
function showSuccess(input) {
    const manipulateSuccesslateDiv = input.parentElement;
    manipulateSuccesslateDiv.className = 'form-control success';
};

/// check required

function checkRequired(inputArr,message){
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input,`${fieldName(input)} is required`)
        } else  {
            showSuccess(input)
        }
    });
};

// function checkLength(input,min,max) {
//     if (input.value.length < min) {
//         showError(input, `${fieldName(input)} must be minimum ${min} characters` )
//     } else  if (input.value.length > max) {
//         showError(input,`${fieldName(input)} must be less than ${max} characters`)   
//     } else {
//         showSuccess(input)
//     }
// };



function checkLength(input, min, max, message) {
    if (input.value.length < min) {
      showError(
        input,
        `${fieldName(input)} must be at least ${min} characters`
      );
    } else if (input.value.length > max) {
      showError(
        input,
        `${fieldName(input)} must be less than ${max} characters`
      );
    } else {
      showSuccess(input);
    }
  }


function fieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// 

// Add events Listner


form.addEventListener('submit', function (e) {

    e.preventDefault();

    console.log('hdhdhdhdh')

    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 8);
    checkLength(password, 6, 10);

});



