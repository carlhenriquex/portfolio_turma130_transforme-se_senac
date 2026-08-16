

# 💻 Portfólio Turma 130 – Transforme-se 2026 | SENAC

Projeto desenvolvido pela **Turma 130 do projeto Transforme-se 2026**, com o objetivo de apresentar a turma, seus integrantes, competências, formações, experiências, interesses profissionais e a trajetória de aprendizado durante a formação em desenvolvimento Front-end.

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**, contando também com recursos de interação, animações, organização de dados e apresentação visual dos integrantes da turma.

---

## 📋 Sobre o Projeto

O **Portfólio Turma 130** é uma aplicação web criada para representar e apresentar os integrantes da turma de forma visual e interativa.

A página reúne informações sobre:

* A Turma 130;
* O projeto Transforme-se 2026;
* Os conhecimentos desenvolvidos durante a formação;
* As Unidades Curriculares estudadas;
* Os integrantes da turma;
* Formação acadêmica;
* Experiências;
* Áreas de interesse;
* A docente da turma;
* Projetos e conhecimentos da professora.

O projeto também utiliza elementos visuais, cards, linha do tempo, carrossel e animações para tornar a apresentação mais dinâmica.

---

## 🎯 Objetivo

O objetivo do projeto é desenvolver um **portfólio digital da Turma 130**, apresentando a identidade da turma e reunindo informações dos seus integrantes em uma única página web.

Além da apresentação da turma, o projeto possibilita colocar em prática conhecimentos adquiridos durante a formação, especialmente nas áreas de:

* Desenvolvimento Front-end;
* HTML;
* CSS;
* JavaScript;
* Design de interfaces;
* UX/UI;
* Lógica de programação;
* Responsividade;
* Organização de projetos.

---

## 💡 Conceito do Projeto

A identidade principal do portfólio é representada pela frase:

> **IDEIAS QUE TRANSFORMAM.**
> **CÓDIGOS QUE TRANSFORMAM.**

E complementada pela mensagem:

> **DESENVOLVENDO SOLUÇÕES PARA O FUTURO.**

O conceito representa a proposta da formação de transformar ideias em soluções utilizando tecnologia e programação.

---

## 👥 Nossa Turma

O portfólio apresenta os integrantes da **Turma 130**, mostrando informações individuais de cada aluno.

Para cada integrante, quando disponível, são apresentados:

* Nome;
* Fotografia;
* Formação;
* Experiências;
* Interesses;
* GitHub;
* LinkedIn.

As informações dos alunos estão organizadas no arquivo:

```text
src/data/dados_alunos.js
```

---

## 🎓 Formação da Turma

Na seção **“Quem Somos”**, o projeto apresenta a formação da Turma 130 como parte do **Transforme-se 2026**, voltada à capacitação profissional de desenvolvedores Front-end.

A formação trabalha conhecimentos necessários para planejar, desenvolver e manter interfaces web modernas e intuitivas.

---

## 📚 Unidades Curriculares

O portfólio apresenta uma linha do tempo com as Unidades Curriculares trabalhadas durante a formação.

### UC1 — Fundamentos do Front-end

São apresentados os fundamentos necessários para iniciar no desenvolvimento web, incluindo:

* Git;
* GitHub;
* Terminal;
* Bases das principais tecnologias.

### UC2 — Design de Interfaces

Aborda:

* Design de interfaces;
* UX/UI;
* Criação de layouts;
* Figma;
* Acessibilidade;
* Experiência do usuário.

### UC3 — Lógica e Algoritmos

Desenvolve o pensamento computacional e a lógica de programação por meio de algoritmos.

### UC4 — JavaScript Moderno

Apresenta conceitos relacionados ao JavaScript moderno, incluindo:

* ES6+;
* Manipulação do DOM;
* Assincronismo.

### UC5 — HTML e Semântica

Trabalha a estruturação de páginas web utilizando HTML e conceitos de semântica, acessibilidade e compreensão das páginas pelos mecanismos de busca.

### UC6 — CSS e Estilização

Apresenta recursos de estilização, incluindo:

* Flexbox;
* Grid;
* Animações;
* SASS/PostCSS.

### UC7 — Responsividade e UX

Representa a etapa de desenvolvimento de um projeto completo, com:

* Design responsivo;
* Experiência do usuário;
* Desenvolvimento desde o início;
* Foco no usuário final.

---

## 👩‍🏫 Docente

O portfólio possui uma seção dedicada à docente da turma.

### Radássila Silva

**Professora da Turma 130**

No projeto, Radássila é apresentada como professora da turma 130 do Transforme-se 2026, apaixonada por tecnologia e ensino, buscando compartilhar conhecimento de forma prática, dinâmica e acessível.

### Formação

* Graduada em Análise e Desenvolvimento de Sistemas (ADS).

### Conhecimentos

O portfólio apresenta conhecimentos em:

* JavaScript;
* TypeScript;
* React;
* Tailwind CSS;
* Python;
* MySQL;
* Figma;
* UX/UI Design.

### Projetos

Também é apresentada sua atuação no desenvolvimento de projetos modernos, responsivos e intuitivos, com foco na transformação de ideias em soluções digitais e na experiência do usuário.

---

## ⚙️ Funcionalidades

O portfólio possui diferentes recursos de interação.

### 📌 Linha do tempo das UCs

Cada Unidade Curricular é representada por um botão.

Ao clicar em uma UC, o sistema apresenta uma caixa com informações específicas sobre aquele conteúdo.

### 📌 Animação dos conteúdos

O arquivo:

```text
src/scripts/animacao-quemsomos.js
```

é responsável pelo comportamento interativo da linha do tempo das Unidades Curriculares.

O script:

* Detecta o clique nas UCs;
* Ativa e desativa os botões;
* Exibe as informações;
* Posiciona dinamicamente o balão de informação;
* Controla a animação de abertura e fechamento.

### 📌 Cards da docente

A seção da professora utiliza cards interativos.

São apresentados três conteúdos:

1. **Sobre mim**
2. **Formações**
3. **Portfólio/Projetos**

O usuário pode navegar entre os cards utilizando:

* Botão anterior;
* Botão próximo;
* Indicadores de navegação.

Essa funcionalidade é controlada pelo arquivo:

```text
src/scripts/docente.js
```

---

## 📂 Estrutura do Projeto

```text
portfolio_turma130_transforme-se_senac/
│
├── README.md
├── index.html
│
├── docs/
│   └── index.drawio
│
└── src/
    │
    ├── css/
    │   ├── global.css
    │   ├── header.css
    │   ├── quem_somos.css
    │   ├── turma.css
    │   ├── docente.css
    │   └── footer.css
    │
    ├── data/
    │   └── dados_alunos.js
    │
    ├── scripts/
    │   ├── animacao-quemsomos.js
    │   ├── docente.js
    │   ├── listar_alunos.js
    │   └── script.js
    │
    └── img/
        │
        ├── alunos/
        ├── banners/
        ├── icons/
        └── professoras/
```

---

## 🗂️ Organização dos Arquivos

### `index.html`

É o arquivo principal da aplicação.

Nele estão estruturadas as principais seções do portfólio:

* Header;
* Início;
* Quem somos;
* Nossa turma;
* Docentes;
* Footer.

---

### `src/css/`

Contém os arquivos responsáveis pela estilização do projeto.

```text
global.css
header.css
quem_somos.css
turma.css
docente.css
footer.css
```

Cada arquivo organiza os estilos de uma parte específica da página.

---

### `src/data/dados_alunos.js`

Armazena as informações dos integrantes da turma.

Os objetos possuem informações como:

```text
foto
nome
formações
experiência
interesses
github
linkedin
```

---

### `src/scripts/`

Contém os códigos JavaScript utilizados no projeto.

#### `animacao-quemsomos.js`

Controla a interação da linha do tempo das Unidades Curriculares.

#### `docente.js`

Controla o carrossel de cards da professora.

#### `listar_alunos.js`

Possui a lógica para criação dos elementos dos alunos na página.

#### `script.js`

Utiliza os dados dos alunos para criar elementos com informações como formação, experiência, interesses, GitHub e LinkedIn.

---

## 🖼️ Imagens

O projeto possui uma organização específica para os recursos visuais:

```text
src/img/
│
├── alunos/
├── banners/
├── icons/
└── professoras/
```

### `alunos/`

Contém as fotografias dos integrantes da turma.

### `banners/`

Contém imagens utilizadas no projeto.

### `icons/`

Contém os ícones e a logo da Turma 130.

### `professoras/`

Contém a imagem da docente apresentada no portfólio.

---

## 🔤 Tipografia

O projeto utiliza a fonte:

**Montserrat**

A fonte é carregada através do Google Fonts e utilizada como parte da identidade visual do portfólio.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — estrutura da página;
* **CSS3** — estilização e identidade visual;
* **JavaScript** — interações e funcionalidades;
* **Google Fonts** — utilização da fonte Montserrat;
* **Figma** — citado na formação como ferramenta de design;
* **Git/GitHub** — conhecimentos trabalhados na formação.

---

## 🔄 Interatividade

O projeto utiliza JavaScript para tornar a página mais dinâmica.

Entre as interações implementadas estão:

* Seleção das Unidades Curriculares;
* Exibição de informações em popovers;
* Animações;
* Carrossel de informações da docente;
* Navegação entre cards;
* Criação dinâmica de elementos da turma.

---

## 📄 Documentação

O projeto possui um arquivo de documentação visual na pasta:

```text
docs/
└── index.drawio
```

O arquivo foi desenvolvido no formato **Draw.io**, sendo utilizado para representar a estrutura/planejamento do projeto.

---

## 🏫 Instituição

**SENAC**

**Projeto Transforme-se 2026**

**Turma 130**

---

## 📌 Considerações Finais

O Portfólio da Turma 130 reúne informações sobre os integrantes e a formação da turma em uma aplicação web desenvolvida durante o curso.

O projeto demonstra a aplicação prática de conhecimentos relacionados ao desenvolvimento Front-end, organização de arquivos, estilização, JavaScript e criação de interfaces interativas.

A proposta do portfólio é representar a turma e seus conhecimentos por meio de uma experiência digital que combina **informação, tecnologia, design e interatividade**.

> **Criatividade • Tecnologia • Inovação**

© 2026 — Turma 130
.
