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
    const small = manipulateErrorlateDiv.querySelector('small');
    small.innerText = message;
    

};

// Show success
function showSuccess(input) {
    const manipulateSuccesslateDiv = input.parentElement;
    manipulateSuccesslateDiv.className = 'form-control success';
};


// Add events Listner


form.addEventListener('submit', function (e) {

    e.preventDefault();

    console.log('hdhdhdhdh')

    if (username.value === '') {
        showError(username, 'User name is Required')
    } else {

        showSuccess(username)
    }
});



