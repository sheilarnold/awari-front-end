document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formulario');
    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            var nome = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var mensagem = document.getElementById('message').value;
            
            alert("Mensagem recebida com sucesso! \n Nome: " + nome + "\n E-mail: " + email + "\n Mensagem: \n" + mensagem);
        });
    }
});

