
// variaveis
const caminho_imagem =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkwIiBoZWlnaHQ9IjI1NSIgdmlld0JveD0iMCAwIDI5MCAyNTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOS44OTE0IDEyNy4yNTFMMTAzLjA2OCA0MEgyNzVWMjE2SDEwMy4xM0wxOS44OTE0IDEyNy4yNTFaIiBzdHJva2U9IiNGQUZBRkYiIHN0cm9rZS13aWR0aD0iMjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGxpbmUgeDE9IjEzIiB5MT0iLTEzIiB4Mj0iMTMwLjk0NyIgeTI9Ii0xMyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxMDcgMC43MDcxMDcgLTAuNzY1MzY3IDAuNjQzNTk0IDExNSA4NikiIHN0cm9rZT0iI0ZBRkFGRiIgc3Ryb2tlLXdpZHRoPSIyNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxsaW5lIHgxPSIxMyIgeTE9Ii0xMyIgeDI9IjEzMC45NDciIHkyPSItMTMiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MTA3IC0wLjcwNzEwNyAwLjc2NTM2NyAwLjY0MzU5NCAxMzMuNDY1IDE4Ny43ODYpIiBzdHJva2U9IiNGQUZBRkYiIHN0cm9rZS13aWR0aD0iMjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K";


const TecladoDiv = document.querySelector(".teclado");

const layoutDiv = document.querySelector('.layout');

const numerosTentativas = 6;

const word = [];

// for (let tecla of teclas) {
//     if (tecla === 'enter'){
//         TecladoDiv.innerHTML += `<div class="tecla result">${tecla}</div>`;

//     }else{
//         TecladoDiv.innerHTML += `<div class="tecla">${tecla}</div>`;

//     }
// }

function inicio() {
  // funcao construtora do layout 

  const tamanho_palavra = getPalavraServidor();
  montarHub(tamanho_palavra);
  montarTeclado();

  const listaDeTeclas = TecladoDiv.querySelectorAll('.tecla')
  for (let i = 0; i < listaDeTeclas.length; i++) {
    listaDeTeclas[i].addEventListener('click', () => {
      escolhendoLetra(listaDeTeclas[i].getAttribute('data-ref'));
    })
  }

}

function getPalavraServidor() {

  const dbword = ['PHELIPE', 'ANA', 'FRUTA', 'GUI', 'PREDIO', 'FORRO', 'LENCOL', 'JUMA', 'VELA', 'SOL', 'ANTA', 'SOGRA', 'FESTA'];

  let indice = getRandomInt(0, dbword.length);

  let palavra_sorteada = dbword[indice];

  let tamanho_palavra = palavra_sorteada.length;
  console.log(palavra_sorteada)
  return tamanho_palavra;

}



function montarHub(qtde_palavras) {
  let corpoColuna = "";
  let numeroColuna = qtde_palavras;
  //montando as colunas
  for (let k = 0; k < numeroColuna; k++) {
    corpoColuna += `<div class="row-item " id="letra_${k}"></div>`;
  }

  // motando as colunas 

  let corpoLinhas = "";
  for (let j = 0; j < numerosTentativas; j++) {
    corpoLinhas += `<div class="layout-row ${j === 0 ? 'visualizada' : ''}">${corpoColuna}</div>`;
  }

  // montando o corpo do layout

  layoutDiv.innerHTML = corpoLinhas;
}


function montarTeclado() {
  let teclas = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    `<img src='${caminho_imagem}' class='delete-left'>`,
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "enter",
  ];

  let corpo = "";

  for (let i = 0; i < teclas.length; i++) {
    if (teclas[i].includes("img") || teclas[i].includes("enter")) {
      corpo += `<div class="tecla ${teclas[i].toUpperCase() === "ENTER" ? "result" : ""
        }" data-ref="${teclas[i].toUpperCase() === "ENTER" ? "ENTER" : "DELETE"}">${teclas[i]
        }</div>`;
    } else {
      corpo += `<div class="tecla" data-ref="${teclas[i].toUpperCase()}">${teclas[i]
        }</div>`;
    }
  }
  //   console.log(corpo);
  TecladoDiv.innerHTML = corpo;

}

function adicionarHub() {

}


function escolhendoLetra(palavra) {
  
  if(palavra.toLowerCase() === 'enter') {
    TestarPalavras();

  }else if (palavra.toLowerCase() === 'delete'){
    deletarIndice();
    console.log('entrei no delete')
  }else{
    word.push(palavra);
    preencherPalavra();
    console.log(word);
  }
 
  return word;

}

function preencherPalavra() {
  for (let j = 0; j < word.length; j++) {

    const listaBlocos = layoutDiv.querySelector('.layout-row.visualizada')

    const a = listaBlocos.querySelector(`#letra_${j}`)

    a.innerHTML = word[j]

  }
}

function TestarPalavras(){

}

function deletarIndice(){

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



// eventos




// Inicializando aplicação

inicio();