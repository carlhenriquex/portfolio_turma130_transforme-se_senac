const cards = document.querySelectorAll(".card");
const bolinhas = document.querySelectorAll(".bolinha");

const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

let cardAtual = 0;

function mostrarCard() {

    cards.forEach(card => {
        card.classList.remove("ativo");
    });

    bolinhas.forEach(bolinha => {
        bolinha.classList.remove("ativo");
    });

    cards[cardAtual].classList.add("ativo");
    bolinhas[cardAtual].classList.add("ativo");

}

botaoProximo.addEventListener("click", () => {

    cardAtual++;

    if (cardAtual >= cards.length) {
        cardAtual = 0;
    }

    mostrarCard();

});

botaoAnterior.addEventListener("click", () => {

    cardAtual--;

    if (cardAtual < 0) {
        cardAtual = cards.length - 1;
    }

    mostrarCard();

});

bolinhas.forEach((bolinha, index) => {

    bolinha.addEventListener("click", () => {

        cardAtual = index;

        mostrarCard();

    });

});

mostrarCard();
