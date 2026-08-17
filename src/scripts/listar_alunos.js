import { alunos } from "../data/dados_alunos.js";

const listaAlunos = document.getElementById("lista-alunos");

alunos.forEach(aluno => {

    const formacoesHTML = aluno.formacoes
        .map(formacao => `
            <span class="formacao">${formacao}</span>
        `)
        .join("");

    const card = `
        <div class="profile-wrapper">

            <img
                src="${aluno.foto}"
                alt="${aluno.nome}"
                class="avatar-trigger"
            >

            <article class="profile-card">

                <div class="card-info">

                    <h3>Formações:</h3>

                    <div class="formacoes">
                        ${formacoesHTML}
                    </div>

                    <h3>Experiências:</h3>
                    <p>${aluno.experiencia}</p>

                    <h3>Interesses:</h3>
                    <p>${aluno.interesses}</p>

                </div>

                <nav class="social-links">

                    <a
                        href="${aluno.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <i class="bi bi-github"></i>
                    </a>

                    <a
                        href="${aluno.linkedin}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i class="bi bi-linkedin"></i>
                    </a>

                </nav>

                <footer class="card-footer">

                    <img
                        src="${aluno.foto}"
                        alt="${aluno.nome}"
                        class="avatar-mini"
                    >

                    <div>
                        <h2>${aluno.nome}</h2>
                        <span>${aluno.funcao}</span>
                    </div>

                </footer>

            </article>

        </div>
    `;

    listaAlunos.insertAdjacentHTML("beforeend", card);
});