function guardaFormulario() {
    document.getElementById('nome_a').innerHTML = document.getElementById('nome').value;
    document.getElementById('sobrenome_a').innerHTML = document.getElementById('sobrenome').value;
    document.getElementById('idade_a').innerHTML = document.getElementById('idade').value;
    document.getElementById('email_a').innerHTML = document.getElementById('email').value;

    window.print();
}