
function verificaSenha() {

    var numeros = /([0-9])/;
    var alfabetoMaiusculo = /(?:.*?[A-Z]{1})/;
    var alfabetoMinusculo = /(?:.*?[A-Z]{1})/;
    var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    const senha = document.getElementById("password").value;
    var mensagensErro = document.getElementById("password-status");

    if (senha.length < 6) {
        mensagensErro.innerHTML = "Força da senha: Fraca, insira no mínimo 6 caracteres";
    } else {
        if (senha.match(numeros) && senha.match(alfabetoMaiusculo) && senha.match(alfabetoMinusculo) && senha.match(chEspeciais)) {
            mensagensErro.innerHTML = "Força da senha: Forte";
        } else {
            mensagensErro.innerHTML = "É necessário inserir Letras Maiúsculas, Letras Minúsculas, Números e Carácter Especial";
        }
    }
}
