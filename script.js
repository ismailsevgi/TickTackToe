//todos
//gameOver screen with aseprite
//X an O sprites
//an Ai
//scretch sounds
//isnt responsive

//selectors
const board = document.getElementById("board");
let block = document.querySelector(".block");
let resetButton = document.querySelector("#resetButton");

let block1 = document.querySelector(".block1");
let block2 = document.querySelector(".block2");
let block3 = document.querySelector(".block3");
let block4 = document.querySelector(".block4");
let block5 = document.querySelector(".block5");
let block6 = document.querySelector(".block6");
let block7 = document.querySelector(".block7");
let block8 = document.querySelector(".block8");
let block9 = document.querySelector(".block9");

// block.innerHTML = "X"; //div in içine X yazdırdık

//eventListeners

board.addEventListener("click", click);
resetButton.addEventListener("click", resetFun);

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

function click(e) {
  e.preventDefault();
  console.log("tiklandi: ", e.target);
  //----
  if (e.target.classList[0] == "block") {
    //targetin içinin boş olup olmadığını kontrol ediyor
    if (e.target.innerHTML == "") {
      if (switches[1].playerSwitch === true) {
        let xImg = document.createElement("img");
        xImg.classList[0] = "image";
        xImg.src = "assets/x.jpeg";

        e.target.appendChild(xImg);
        // e.target.innerHTML = "X";
        console.log("playerSwitch: ", switches[1].playerSwitch);
        switches[1].playerSwitch = false;
      } else {
        let oImg = document.createElement("img");
        oImg.classList[0] = "image";
        oImg.src = "assets/O.jpeg";

        e.target.appendChild(oImg);

        console.log("playerSwitch: ", switches[1].playerSwitch);
        switches[1].playerSwitch = true;
      }
    } else {
      alert("Aynı yere tıklayamazsın!");
    }
  }
}

//Checks if a player wins
let myInterval = setInterval(checkWin, 200);
let xWins = false;
let oWins = false;

function gameOverScreenFun() {
  let gameOver = document.createElement("div");

  gameOver.setAttribute("id", "gameOverScreen");
  if (xWins == true) {
    gameOver.innerHTML = "X KAZANDI!      GAME OVER!";
  } else if (oWins == true) {
    gameOver.innerHTML = "O KAZANDI!      GAME OVER!";
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
