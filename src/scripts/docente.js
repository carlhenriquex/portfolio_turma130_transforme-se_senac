const docentes = document.querySelectorAll(".docente-slide");
const bolinhasDocentes = document.querySelectorAll(".bolinha-docente");

const botaoAnteriorDocente =
    document.getElementById("docente-anterior");

const botaoProximoDocente =
    document.getElementById("docente-proximo");

let docenteAtual = 0;


function mostrarDocente() {

    docentes.forEach((docente) => {
        docente.classList.remove("ativo");
    });

    bolinhasDocentes.forEach((bolinha) => {
        bolinha.classList.remove("ativo");
    });

    docentes[docenteAtual].classList.add("ativo");

    bolinhasDocentes[docenteAtual].classList.add("ativo");
}


botaoProximoDocente.addEventListener("click", () => {

    docenteAtual++;

    if (docenteAtual >= docentes.length) {
        docenteAtual = 0;
    }

    mostrarDocente();
});


botaoAnteriorDocente.addEventListener("click", () => {

    docenteAtual--;

    if (docenteAtual < 0) {
        docenteAtual = docentes.length - 1;
    }

    mostrarDocente();
});


bolinhasDocentes.forEach((bolinha, index) => {

    bolinha.addEventListener("click", () => {

        docenteAtual = index;

        mostrarDocente();
    });

});


mostrarDocente();