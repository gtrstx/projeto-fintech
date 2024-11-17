function validarSenha() {
    const senha = document.getElementById("senha").value;
    const especial = /^(?=.*[!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/~`]).{6,}$/;

    if (!especial.test(senha)) {
        alert("A senha deve ter no mínimo 6 caracteres e incluir pelo menos um caractere especial.");
        return false; // Impede o envio do formulário
    }
    return true; // Permite o envio do formulário
}

function redirecionar() {
    window.location.href = '../login/login.html'
}