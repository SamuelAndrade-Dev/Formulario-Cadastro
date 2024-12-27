function validateForm() {
    const email = document.getElementById ('email').value;
    if (!email.includes('@')) {
        alert('Por favor, insira um e-mail válido.')
        return false;
    }
    return true;
}

function validateForm() {
    const usernameInput = document.getElementById ('username');
    const minLength = 4;

    if (!usernameInput.value.length < minLength) {
        alert('O nome de usuário deve ter pelo menos $ {4}');
        event.preventDefault();
    }
}