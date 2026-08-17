const janela = document.querySelector(".carrossel-janela");
const galeria = document.querySelector(".galeria-polaroid");

let arrastando = false;
let inicioX = 0;
let posicaoInicial = 0;
let posicaoAtual = 0;


// MOUSE
janela.addEventListener("mousedown", (e) => {
    arrastando = true;

    inicioX = e.clientX;
    posicaoInicial = posicaoAtual;

    janela.classList.add("arrastando");
});

document.addEventListener("mousemove", (e) => {
    if (!arrastando) return;

    const deslocamento = e.clientX - inicioX;

    posicaoAtual = posicaoInicial + deslocamento;

    limitarPosicao();

    galeria.style.transform =
        `translateX(${posicaoAtual}px)`;
});

document.addEventListener("mouseup", () => {
    arrastando = false;

    janela.classList.remove("arrastando");
});


// TOUCH
janela.addEventListener("touchstart", (e) => {
    arrastando = true;

    inicioX = e.touches[0].clientX;
    posicaoInicial = posicaoAtual;
}, { passive: true });


janela.addEventListener("touchmove", (e) => {
    if (!arrastando) return;

    const deslocamento =
        e.touches[0].clientX - inicioX;

    posicaoAtual = posicaoInicial + deslocamento;

    limitarPosicao();

    galeria.style.transform =
        `translateX(${posicaoAtual}px)`;
}, { passive: true });


janela.addEventListener("touchend", () => {
    arrastando = false;
});


// LIMITAR O ARRASTE
function limitarPosicao() {

    const larguraGaleria = galeria.scrollWidth;
    const larguraJanela = janela.clientWidth;

    const limite = larguraJanela - larguraGaleria;

    if (posicaoAtual > 0) {
        posicaoAtual = 0;
    }

    if (posicaoAtual < limite) {
        posicaoAtual = limite;
    }
}