function validateForm() {
    /* Declare Variables */
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var emailAddress = document.getElementById('emailAddress');
    var message = document.getElementById('message');
    var contactForm = document.getElementById('Form');
    var letters = /^[A-Za-z]+$/;

    if (firstName.value.length < 2) {
        /* triggered if the length of firstName is two characters or less */
        alert('Sorry: First name must contain two (2) or more characters.');
        changeIt();
        firstName.focus();
        return false;
    } else if (!firstName.value.match(letters)) {
        /* Triggered if firstName contains special characters or numbers */
        alert('Sorry: First name can only contain letters A-Z.');
        changeIt();
        firstName.focus();
        return false;
    } else if (lastName.value.length < 2) {
        /* Triggered if the length of lastName is two characters or less */
        alert('Sorry: Last name must contain two (2) or more characters.');
        changeIt();
        lastName.focus();
        return false;
    } else if (!lastName.value.match(letters)) {
        /* Triggered if lastName contains special characters or numbers */
        alert('Sorry: Last name can only contain letters A-Z.');
        changeIt();
        lastName.focus();
        return false;
    } else if (message.value.length <= 5) {
        /* Triggered if lastName contains special characters or numbers */
        alert('Did you already finish typing out your message?');
        changeIt();
        message.focus();
        return false;
    } else {

        return true;

    }
}

function changeIt() {
    document.getElementById('errorMessage').innerHTML = 'Please review all errors and try again!';
}

function changeItTrue() {
    document.getElementById('errorMessage').innerHTML = 'Please review all errors and try again!';
}