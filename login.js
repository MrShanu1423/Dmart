document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const continueButton = document.getElementById('continue-button'); // Match the ID with your HTML button
    const phonePattern = /^[0-9]{10}$/;

    phoneInput.addEventListener('input', () => {
        const isValid = phonePattern.test(phoneInput.value);
        continueButton.disabled = !isValid;
        if (isValid) {
            continueButton.style.backgroundColor = '#28a745';
            continueButton.style.cursor = 'pointer';
        } else {
            continueButton.style.backgroundColor = '#ccc';
            continueButton.style.cursor = 'not-allowed';
        }
    });
});
