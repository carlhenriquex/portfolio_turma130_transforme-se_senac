import { alunos } from "../data/dados_alunos.js";

const listaAlunos = document.getElementById("lista-alunos");
const carrossel = document.querySelector(".carrossel-alunos");

// 1. Função para gerar o HTML do card
function criarCardHTML(aluno) {
    const formacoesHTML = aluno.formacoes
        .map(formacao => `<span class="formacao">${formacao}</span>`)
        .join("");

    return `
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
}

// 2. Renderiza os alunos originais
alunos.forEach(aluno => {
    listaAlunos.insertAdjacentHTML("beforeend", criarCardHTML(aluno));
});

// 3. Duplica os itens para permitir o loop infinito suave
alunos.forEach(aluno => {
    listaAlunos.insertAdjacentHTML("beforeend", criarCardHTML(aluno));
});


// ======================================
// CARROSSEL AUTOMÁTICO INFINITO
// ======================================

let posicao = 0;
const velocidade = 2;
let pausado = false;

function animarCarrossel() {
    if (!pausado) {
        posicao -= velocidade;

        // O limite agora é exatamente a metade da largura total (largura dos cards originais)
        const larguraConteudoOriginal = listaAlunos.scrollWidth / 2;

        // Quando deslocar o equivalente ao grupo original completo, reseta suavemente
        if (Math.abs(posicao) >= larguraConteudoOriginal) {
            posicao = 0;
        }

        listaAlunos.style.transform = `translateX(${posicao}px)`;
    }

    requestAnimationFrame(animarCarrossel);
}


// ======================================
// PAUSAR NO HOVER
// ======================================

carrossel.addEventListener("mouseenter", () => {
    pausado = true;
});

carrossel.addEventListener("mouseleave", () => {
    pausado = false;
});


// ======================================
// INICIAR
// ======================================

animarCarrossel();