/* global $ MobileDetect */

//top画像切り替え
const imgs = $('.img');
let Img = -1;
imgs.hide()

function showNextImg() {
    Img++;
    imgs.eq(Img % imgs.length).fadeIn(1500).delay(10000).fadeOut(1500, showNextImg);
  }
  showNextImg();

