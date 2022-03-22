function createPixel(altura, largura) {
  for (let i = 0; i < altura; i += 1) {
    for (let i = 0; i < largura; i += 1) {
      let pix = document.createElement('div');
      pix.classList = 'pixel';
      pix.backgroundColor = 'white';
      document.getElementById('pixel-board').appendChild(pix);
    }
    console.log();
  }
}
createPixel(3, 2);
