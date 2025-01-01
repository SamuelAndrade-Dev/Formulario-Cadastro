function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const surname = document.getElementById('surname').value;
    const radio = document.getElementById('radio').value;
    const check = document.getElementById('check').value;
    let isValid = true;

    document.getElementById('username').setAttribute('required',"");
    document.getElementById('surname').setAttribute('required', "");
    document.getElementById('email').setAttribute('required', "");
    document.getElementById('radio').setAttribute('required', "");
    document.getElementById('check').setAttribute('required', "");
        
    if (username.length < 3) {
        console.log('Nome deve ter mais de 3 caracteres');
        isValid = false;
    } else {
        console.log('Nome Váido');
    }

    if (surname.length < 3) {
        console.log('Sobrenome deve haver mais de 3 caracteres')
        isValid = false;
    } else {
        console.log('Sobrenome válido')
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) {
        console.log('Email inválido');
        isValid = false;
    } else {
        console.log('Email válido');
    }

    if(isValid) {
        console.log('Fomulário válido, pronto para ser enviado')
    }
}
 
alert('site em construcao')