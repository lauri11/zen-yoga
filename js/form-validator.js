const form = document.querySelector('.feedback-form');
const nameInput = document.querySelector('.feedback-form input[name="name"]');
const phoneNumberInput = document.querySelector('.feedback-form input[name="phone-number"]');
const emailInput = document.querySelector('.feedback-form input[name="email"]');

function showError(input, message) {
    const inputControl = input.parentElement;
    inputControl.classList.add('error');
    const small = inputControl.querySelector('span');
    small.innerText = message;
}

function showSuccess(input) {
    const inputControl = input.parentElement;
    inputControl.classList.add('success');
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        )
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        )
    } else {
        showSuccess(input);
    }
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        }
    });

    return isRequired;
}

function isEmpty(input) {
    if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
        return true;
    }
    return false;
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!isEmpty(nameInput) && !isEmpty(emailInput)) {
        checkLength(nameInput, 3, 15);
        checkEmail(emailInput);
    } else if (!isEmpty(nameInput)) {
        checkLength(nameInput, 3, 15);
    } else if (!isEmpty(emailInput)) {
        checkEmail(emailInput);
    }
});