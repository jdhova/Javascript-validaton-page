const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/// functions




// Add events Listnet

form.addEventListner('submit', function(e) {
    e.preventDefault()

    console.log('submit')

    if( username === '') {
        showError(username,'User Name is Required')
    } else {
        showSuccess(username)
    }
})




