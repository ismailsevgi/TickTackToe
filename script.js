//todos
//gameOver screen with aseprite
//X an O sprites
//an Ai
//scretch sounds
//isnt responsive

//selectors
const board = document.getElementById('board');
let block = document.querySelector('.block');
let resetButton = document.querySelector('#resetButton');

let block1 = document.querySelector('.block1');
let block2 = document.querySelector('.block2');
let block3 = document.querySelector('.block3');
let block4 = document.querySelector('.block4');
let block5 = document.querySelector('.block5');
let block6 = document.querySelector('.block6');
let block7 = document.querySelector('.block7');
let block8 = document.querySelector('.block8');
let block9 = document.querySelector('.block9');

// block.innerHTML = "X"; //div in içine X yazdırdık

//eventListeners

board.addEventListener('click', click);
resetButton.addEventListener('click', resetFun);

//functions

function resetFun(e) {
  location.reload(); //sayfayı yeniliyor
}

const switches = [
  {
    block1Switch: false,
    block2Switch: false,
    block3Switch: false,
    block4Switch: false,
    block5Switch: false,
    block6Switch: false,
    block7Switch: false,
    block8Switch: false,
    block9Switch: false,
  },
  {
    playerSwitch: true,
  },
];

//blockSwitch function here
function blockSwitcher(e) {
  if (e.target.classList[1] == 'block1') {
    switches[0].block1Switch = true;
  }
  if (e.target.classList[1] == 'block2') {
    switches[0].block2Switch = true;
  }
  if (e.target.classList[1] == 'block3') {
    switches[0].block3Switch = true;
  }
  if (e.target.classList[1] == 'block4') {
    switches[0].block4Switch = true;
  }
  if (e.target.classList[1] == 'block5') {
    switches[0].block5Switch = true;
  }
  if (e.target.classList[1] == 'block6') {
    switches[0].block6Switch = true;
  }
  if (e.target.classList[1] == 'block7') {
    switches[0].block7Switch = true;
  }
  if (e.target.classList[1] == 'block8') {
    switches[0].block8Switch = true;
  }
  if (e.target.classList[1] == 'block9') {
    switches[0].block9Switch = true;
  }
}

function click(e) {
  e.preventDefault();
  console.log('tiklandi: ', e.target);
  blockSwitcher(e);
  //----
  if (e.target.classList[0] == 'block') {
    //checks if the target is empty or not
    if (e.target.innerHTML == '') {
      if (switches[1].playerSwitch === true) {
        let xImg = document.createElement('img');
        xImg.classList[0] = 'image';
        xImg.src = 'assets/x.jpeg';

        e.target.appendChild(xImg);
        // e.target.innerHTML = "X";
        console.log('playerSwitch: ', switches[1].playerSwitch);
        switches[1].playerSwitch = false;
        checkAi();
      } else {
        let oImg = document.createElement('img');
        oImg.classList[0] = 'image';
        oImg.src = 'assets/O.jpeg';

        e.target.appendChild(oImg);

        console.log('playerSwitch: ', switches[1].playerSwitch);
        switches[1].playerSwitch = true;
      }
    } else {
      alert('Aynı yere tıklayamazsın!');
    }
  }
}

//Checks if a player wins
let myInterval = setInterval(checkWin, 200);
let xWins = false;
let oWins = false;

function gameOverScreenFun() {
  let gameOver = document.createElement('div');

  gameOver.setAttribute('id', 'gameOverScreen');
  if (xWins == true) {
    gameOver.innerHTML = 'X KAZANDI!      GAME OVER!';
  } else if (oWins == true) {
    gameOver.innerHTML = 'O KAZANDI!      GAME OVER!';
  }

  document.body.appendChild(gameOver);
}

function checkWin() {
  if (
    block1.innerHTML == '<img src="assets/x.jpeg">' &&
    block2.innerHTML == '<img src="assets/x.jpeg">' &&
    block3.innerHTML == '<img src="assets/x.jpeg">'
  ) {
    xWins = true;

    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block4.innerHTML == '<img src="assets/x.jpeg">' &&
    block5.innerHTML == '<img src="assets/x.jpeg">' &&
    block6.innerHTML == '<img src="assets/x.jpeg">'
  ) {
    xWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block7.innerHTML == '<img src="assets/x.jpeg">' &&
    block8.innerHTML == '<img src="assets/x.jpeg">' &&
    block9.innerHTML == '<img src="assets/x.jpeg">'
  ) {
    xWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block1.innerHTML == '<img src="assets/x.jpeg">' &&
    block5.innerHTML == '<img src="assets/x.jpeg">' &&
    block9.innerHTML == '<img src="assets/x.jpeg">'
  ) {
    xWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block3.innerHTML == '<img src="assets/x.jpeg">' &&
    block5.innerHTML == '<img src="assets/x.jpeg">' &&
    block7.innerHTML == '<img src="assets/x.jpeg">'
  ) {
    xWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block1.innerHTML == '<img src="assets/x.jpeg">' &&
    block4.innerHTML == '<img src="assets/x.jpeg">' &&
    block7.innerHTML == '<img src="assets/x.jpeg">'
  ) {
    xWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block2.innerHTML == '<img src="assets/x.jpeg">' &&
    block5.innerHTML == '<img src="assets/x.jpeg">' &&
    block8.innerHTML == '<img src="assets/x.jpeg">'
  ) {
    xWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block3.innerHTML == '<img src="assets/x.jpeg">' &&
    block6.innerHTML == '<img src="assets/x.jpeg">' &&
    block9.innerHTML == '<img src="assets/x.jpeg">'
  ) {
    xWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }

  /////////////Y KISMI//////////////////////

  if (
    block1.innerHTML == '<img src="assets/O.jpeg">' &&
    block2.innerHTML == '<img src="assets/O.jpeg">' &&
    block3.innerHTML == '<img src="assets/O.jpeg">'
  ) {
    oWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block4.innerHTML == '<img src="assets/O.jpeg">' &&
    block5.innerHTML == '<img src="assets/O.jpeg">' &&
    block6.innerHTML == '<img src="assets/O.jpeg">'
  ) {
    oWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block7.innerHTML == '<img src="assets/O.jpeg">' &&
    block8.innerHTML == '<img src="assets/O.jpeg">' &&
    block9.innerHTML == '<img src="assets/O.jpeg">'
  ) {
    oWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block1.innerHTML == '<img src="assets/O.jpeg">' &&
    block5.innerHTML == '<img src="assets/O.jpeg">' &&
    block9.innerHTML == '<img src="assets/O.jpeg">'
  ) {
    oWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block3.innerHTML == '<img src="assets/O.jpeg">' &&
    block5.innerHTML == '<img src="assets/O.jpeg">' &&
    block7.innerHTML == '<img src="assets/O.jpeg">'
  ) {
    oWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block1.innerHTML == '<img src="assets/O.jpeg">' &&
    block4.innerHTML == '<img src="assets/O.jpeg">' &&
    block7.innerHTML == '<img src="assets/O.jpeg">'
  ) {
    oWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block2.innerHTML == '<img src="assets/O.jpeg">' &&
    block5.innerHTML == '<img src="assets/O.jpeg">' &&
    block8.innerHTML == '<img src="assets/O.jpeg">'
  ) {
    oWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
  if (
    block3.innerHTML == '<img src="assets/O.jpeg">' &&
    block6.innerHTML == '<img src="assets/O.jpeg">' &&
    block9.innerHTML == '<img src="assets/O.jpeg">'
  ) {
    oWins = true;
    gameOverScreenFun();
    clearInterval(myInterval);
  }
}

//default switches

//     block1Switch: false,
//     block2Switch: false,
//     block3Switch: false,
//     block4Switch: false,
//     block5Switch: false,
//     block6Switch: false,
//     block7Switch: false,
//     block8Switch: false,
//     block9Switch: false,
// AI
function checkAi() {
  let emptyOnes = switches[0].filter(item == false);
  console.log(emptyOnes);
  let decision = Math.floor(Math.random() * 10);
  console.log('deside: ', decision);

  block1.innerHTML !== '' ? (switches[0].block1Switch = false) : true;
  switch (e) {
    case e.target.classList[1]:
  }
  console.log('block1switch: ', switches[0].block1Switch);

  switches[1].playerSwitch = true; //true yaparak hamleyi oyuncuya veriyor
}

/*oyuncu x işaretine bastıktan sonra bir fonksiyon çalışır
yapay zeka boş olan tüm slotları kayıt eder => boş olanları ve dolu olanları
yapay zeka tehlike seviyesini kontrol eder => eğer yüksek ise oyuncuyu engelleme zarı atar : değilse 
kendi kazanma yoluna gider.
zar 0-6 arası olacaktır, 3 ve üstü atarsa oyuncunun tehlikeli noktasına hamle yapacaktır : değilse kendi kazanma yoluna gidecektir
Ai O işraretini koyduktan sonra sırayı oyuncuya devreder
*/
