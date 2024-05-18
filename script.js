function adicionarConvidado() {
    var nome = document.getElementById("nome").value;
    var data = document.getElementById("data").value;
    var horario = document.getElementById("horario").value;

    if (nome && data && horario) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = "<strong>Nome:</strong> " + nome + "<br>" +
                            "<strong>Data:</strong> " + data + "<br>" +
                            "<strong>Horário:</strong> " + horario;
        document.getElementById("listaConvidados").appendChild(card);

           
        document.getElementById("nome").value = "";
        document.getElementById("data").value = "";
        document.getElementById("horario").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
