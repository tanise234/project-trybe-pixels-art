function escolheCor(novaCor) {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  const cor = 'rgb(' + r + ',' + g + ',' + b + ')';
  novaCor.style.backgroundColor = cor;
}

// criar paleta de cores
function coresNovas() {
  const cor1 = document.createElement('li');
  cor1.classList.add('color', 'cor1', 'selected');
  cor1.style.backgroundColor = 'black';
  document.getElementById('color-palette').appendChild(cor1);
  for (let i = 0; i < 3; i += 1) {
    const novaCore = document.createElement('li');
    escolheCor(novaCore);
    novaCore.classList.add('color');
    novaCore.classList.add('cor' + (i + 2));
    document.getElementById('color-palette').appendChild(novaCore);
  }
}

coresNovas();

// selecionar cor da paleta
function selecionaCor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

// adicionar eventListener na paleta de cores
const cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', selecionaCor);
}

// aplicar cor no pixel-board
function aplicaCor(event) {
  const corEscolhida = document.querySelector('.selected');
  event.target.style.backgroundColor = corEscolhida.style.backgroundColor;
}

// criar quadro de pixels
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
const pixels = document.querySelectorAll('section div');

// botão limpar
function limpaQuadroDePixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', limpaQuadroDePixels);

// botão mudar tamanho do quadro
function eliminaQuadro() {
  if (pixels.length !== 0) {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].parentNode.removeChild(pixels[i]);
    }
  }
}

function criaQuadro(n) {
  if (n >= 0 && n < 5) {
    createPixel(5, 5);
  } else if (n > 50) {
    createPixel(50, 50);
  } else {
    createPixel(n, n);
  }
}

function mudarTamanho() {
  const n = document.getElementById('board-size').value;
  if (n !== false) {
    alert('Board inválido!');
  }
  eliminaQuadro();
  criaQuadro(n);
}

const botaoTamanho = document.getElementById('generate-board');
botaoTamanho.addEventListener('click', mudarTamanho);
