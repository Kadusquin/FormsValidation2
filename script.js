function validateForm(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!isValidEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    alert('Login bem-sucedido!');
}

function isValidEmail(email) {
    // Esta é uma validação simples de email. Pode não cobrir todos os casos.
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}