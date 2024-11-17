function verificarLogin() {
    const emailCorreto = 'adm@aurea.com.br';
    const senhaCorreta = 'adm123!';

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === emailCorreto && senha === senhaCorreta) {
        window.location.href = "../produtos/index.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
}