// // requisito 6 - iniciar com a classe selected na cor1
// let corSelecionada = document.querySelector('.cor1');
// corSelecionada.classList.add('selected');

// adicionar eventListener na paleta de cores
let cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', selecionaCor);
}

let pix;
function createPixel(altura, largura) {
  for (let i = 0; i < altura; i += 1) {
    for (let j = 0; j < largura; j += 1) {
      pix = document.createElement('div');
      pix.classList = 'pixel';
      pix.addEventListener('click', aplicaCor);
      document.getElementById('pixel-board').appendChild(pix);
    }
    const pulaLinha = document.createElement('br');
    document.getElementById('pixel-board').appendChild(pulaLinha);
  }
}
createPixel(5, 5);

// selecionar cor da paleta
function selecionaCor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

// aplicar cor no pixel-board
function aplicaCor(event) {
  let classeDaCor = document.querySelector('.selected').classList;
  event.target.classList = classeDaCor;
  event.target.classList.remove('selected');
}

// botão limpar
let botao = document.getElementById('clear-board');
botao.addEventListener('click', limpaQuadroDePixels);

function limpaQuadroDePixels() {
  let pixels = document.querySelectorAll('section div');
  for (p in pixels) {
      pixels[p].classList = 'pixel';
  }
}
