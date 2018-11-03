// refer to question 4 before development starts for scope document

var submitBtn = document.getElementById('submitContact');
submitBtn.addEventListener('click', function(){
    // Names
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    // Regex checking that field is not blank
    var nameVal = /([^\s])/;
    var firstNameResult = nameVal.test(firstName);
    var lastNameResult = nameVal.test(lastName);

    // Email
    var emailAddress = document.getElementById('email').value;
    // Regex for email. name@name.name accepted
    var emailVal = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailResult = emailVal.test(emailAddress);

    // Phone Number
    var phoneNumber = document.getElementById('phone').value;
    // Regex for numbers only, format XXX XXX XXXX, XXX-XXX-XXXX or XXX.XXX.XXXX
    var phoneVal = /\d{3}(\s?|-?|\.?)\d{3}(\s?|-?|\.?)\d{4}/g;
    var phoneResult = phoneVal.test(phoneNumber);



    // Validation feedback
    var firstNameErr = document.getElementById('firstNameError');
    var lastNameErr = document.getElementById('lastNameError');
    var phoneErr = document.getElementById('phoneError');
    var emailErr = document.getElementById('emailError');

    // Diplay error message if no match, hide error message if fixed
    if (!firstNameResult) {
        firstNameErr.style.display = "block";
    } else {
        firstNameErr.style.display = "none";
    }
    if (!lastNameResult) {
        lastNameErr.style.display = "block";
    } else {
        lastNameErr.style.display = "none";
    }
    if (!phoneResult) {
        phoneErr.style.display = "block";
    } else {
        phoneErr.style.display = "none";
    }
    if (!emailResult) {
        emailErr.style.display = "block";
    } else {
        emailErr.style.display = "none";
    }
});