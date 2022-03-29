// adicionar eventListener na paleta de cores
let cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', selecionaCor);
}

// selecionar cor da paleta
function selecionaCor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
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

// aplicar cor no pixel-board
function aplicaCor(event) {
  let classeDaCor = document.querySelector('.selected').classList;
  event.target.classList = classeDaCor;
  event.target.classList.remove('selected');
  event.target.classList.add('pixel');
}

// botão limpar
function limpaQuadroDePixels() {
  let pixels = document.querySelectorAll('section div');
  for (p in pixels) {
    pixels[p].classList = 'pixel';
  }
}

const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', limpaQuadroDePixels);

// botão mudar tamanho do quadro
function mudarTamanho() {
  let n = document.getElementById('board-size').value;
  if (n == false){
    alert('Board inválido!');
  }
  let pixels = document.querySelectorAll('section div');
  if (pixels.length !== 0) {
    for (i = 0; i < pixels.length; i += 1) {
      pixels[i].parentNode.removeChild(pixels[i]);
    }
  }

  if (n >= 0 && n < 5) {
    createPixel(5, 5);
  } else if (n > 50) {
    createPixel(50, 50);
  } else {
    createPixel(n, n);
  }
}

const botaoTamanho = document.getElementById('generate-board');
botaoTamanho.addEventListener('click', mudarTamanho);
