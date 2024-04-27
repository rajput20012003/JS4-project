const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const form = document.getElementById('signupForm');

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    function validateEmail() {
      const emailValue = emailInput.value.trim();
      if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailError.textContent = 'All good to go!';
        emailError.style.color = 'green';
      } else {
        emailError.textContent = 'Email must be valid.';
        emailError.style.color = 'red';
      }
    }

    function validatePassword() {
      const passwordValue = passwordInput.value.trim();
      if (passwordValue.length > 8) {
        passwordError.textContent = 'All good to go!';
        passwordError.style.color = 'green';
      } else {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordError.style.color = 'red';
      }
    }

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateEmail() && validatePassword()) {
        const confirmation = confirm('Are you sure you want to sign up?');
        if (confirmation) {
          alert('Successful signup!');
        } else {
          // Clear input values
          emailInput.value = '';
          passwordInput.value = '';
          // Reset error messages
          emailError.textContent = '';
          passwordError.textContent = '';
        }
      }
    });