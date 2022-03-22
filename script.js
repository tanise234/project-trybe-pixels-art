function createPixel(altura, largura) {
  for (let i = 0; i < altura; i += 1) {
    for (let j = 0; j < largura; j += 1) {
      const pix = document.createElement('div');
      pix.classList = 'pixel';
      pix.backgroundColor = 'white';
      document.getElementById('pixel-board').appendChild(pix);
    }
    const pulaLinha = document.createElement('br');
    document.getElementById('pixel-board').appendChild(pulaLinha);
  }
}
createPixel(6, 7);
