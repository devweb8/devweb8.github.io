let urlCandidatos = "http://localhost:3000/candidatos";

const botao = $("#carregar");
const lista = $("#lista");

botao.on("click", function(){
    console.log("ok");
    $.ajax({
        url: urlCandidatos,
        dataType: "json",
        method: "GET", /* obter os dados */
        success: function(resposta){
            
            /* Loop $.each */
            $.each(resposta, function(indice, item){
                console.log(indice, item);

                lista.append(
                    `<li class="list-group-item">
                    ${item.nome} - ${item.vaga}
                    </li>`
                );

            });
        },
        error: function(){
            console.log("Erro ao carregar os dados!");
        }
    });
});