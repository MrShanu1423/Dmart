document.addEventListener('DOMContentLoaded', function () {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const submitButton = document.getElementById('submitButton');

    function validateForm() {
        if (firstName.value.trim() !== '' && lastName.value.trim() !== '') {
            submitButton.disabled = false;
            submitButton.classList.add('enabled');
        } else {
            submitButton.disabled = true;
            submitButton.classList.remove('enabled');
        }
    }

    firstName.addEventListener('input', validateForm);
    lastName.addEventListener('input', validateForm);

    document.getElementById('userForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted!');
        // Add your form submission logic here
    });
});
