let urlVagas = "http://localhost:3000/vagas"; // endpoint

const selectVaga = document.querySelector("#vaga");

/* Ajax */
fetch(urlVagas)
    .then(resposta => resposta.json())
    .then(dados => {
        // Adicionando um option vazio ao select
        selectVaga.innerHTML = "<option></option>";

        // Usando um loop for/of para acessar cada vaga
        for( let vaga of dados ){
            let opcao = document.createElement("option");

            // Adicionando o texto ao option (visível)
            opcao.textContent = vaga.titulo;

            // Adicionando o id da vaga ao value do option
            opcao.value = vaga.id;

            selectVaga.appendChild(opcao);
        }
    });