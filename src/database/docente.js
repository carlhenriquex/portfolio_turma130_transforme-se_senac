const cards = document.querySelectorAll(".card-docente");
const bolinhas = document.querySelectorAll(".bolinha");

const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

let cardAtual = 0;

function atualizarCarrossel() {

    cards.forEach((card, index) => {
        card.classList.remove("ativo");

        if (index === cardAtual) {
            card.classList.add("ativo");
        }
    });

    bolinhas.forEach((bolinha, index) => {
        bolinha.classList.remove("ativo");

        if (index === cardAtual) {
            bolinha.classList.add("ativo");
        }
    });
}

botaoProximo.addEventListener("click", () => {

    cardAtual++;

    if (cardAtual >= cards.length) {
        cardAtual = 0;
    }

    atualizarCarrossel();
});

botaoAnterior.addEventListener("click", () => {

    cardAtual--;

    if (cardAtual < 0) {
        cardAtual = cards.length - 1;
    }

    atualizarCarrossel();
});

bolinhas.forEach((bolinha, index) => {

    bolinha.addEventListener("click", () => {
        cardAtual = index;

        atualizarCarrossel();
    });
});

atualizarCarrossel();