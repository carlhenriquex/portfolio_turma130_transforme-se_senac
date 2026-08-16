const listaAlunos = document.getElementById("lista-alunos");

fetch("./src/data/dados_alunos.js")
    .then(response => response.json())
    .then(alunos => {

        alunos.forEach(aluno => {

            const elementoAluno = document.createElement("div");

            elementoAluno.classList.add("aluno");

            elementoAluno.innerHTML = `
                <div class="box-img-aluno">
                    <img 
                        src="src/img/alunos/${aluno.imagem}" 
                        alt="${aluno.nome}"
                    >
                </div>

                <div class="descricao-aluno">
                    <h4 class="nome-aluno">${aluno.nome}</h4>
                    <p class="funcao-aluno">${aluno.funcao}</p>
                </div>
            `;

            listaAlunos.appendChild(elementoAluno);
        });

    })
    .catch(error => {
        console.error("Erro ao carregar alunos:", error);
    });