const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using COnstraint API
  isValid = form.checkValidity();

  // Style Main Message for an Error
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    messageContainer.style.border = '3px solid red';

    return;
  }

  // Check for matching paswords
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'rgb(9, 207, 9)';
    password2El.style.borderColor = 'rgb(9, 207, 9)';
  } else {
    passwordsMatch = false;
    message.textContent = 'Passwords do not match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    messageContainer.style.border = '3px solid red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';

    return;
  }

  // If form and passwords are valid
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'rgb(9, 207, 9)';
    messageContainer.style.borderColor = 'rgb(9, 207, 9)';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  // Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();

  // Validate Form
  validateForm();

  // Submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener('submit', processFormData);
