// endpoint (api) de candidatos
let urlCandidatos = "http://localhost:3000/candidatos";

const formulario = $("#cadastro");
const msg = $("#mensagem");

formulario.on("submit", function(event){
    /* anula o comportamento padrão
    de redirecionamento/recarregamento */
    event.preventDefault();

    let dados = {
        nome : $("#nome").val(),
        data : $("#data").val(),
        telefone : $("#telefone").val(),
        email : $("#email").val(),
        vaga : $("#vaga option:selected").text()
    };

    /* Usando Ajax via jQuery */
    $.ajax({
        url: urlCandidatos,
        method: "POST", /* enviar/gravar dados no server */
        data: dados,
        success: function(){
            // alert("Dados enviados com sucesso!");
            msg.text("Dados enviados com sucesso!");
            msg.css("color", "blue");
            formulario[0].reset(); // limpar campos form
        },
        error: function(){
            // alert("Deu ruim!");
            msg.text("Deu ruim!");
            msg.css("color", "red");
        }
    });

});