const container = document.getElementById("lista-alunos");


alunos.forEach(aluno => {

    const card = document.createElement("div");

    card.innerHTML = `
        <h2>${aluno.nome}</h2>

        <p>
        Formação: ${aluno.formacoes}
        </p>

        <p>
        Experiência: ${aluno.experiencia}
        </p>

        <p>
        Interesses: ${aluno.interesses.join(", ")}
        </p>

        <a href="${aluno.github}">
        GitHub

        <p>
        
        <a href="${aluno.linkedin}">
        Linkedin
        </a>
    `;


    container.appendChild(card);

});