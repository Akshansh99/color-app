var current = 6;
var colors = generateRandomColors(current);
var headerChange = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var headcolor = document.querySelector("#c-p");
var statusgame = document.querySelector("#status");
var resetButton = document.querySelector("#Reset");
var playAgain = document.querySelector("#Play");
var easy = document.querySelector("#easybtn")
var hard = document.querySelector("#hardbtn")


resetButton.addEventListener("click", function() {
    colors = generateRandomColors(current);
    pickedcolor = pickColor();
    headcolor.textContent = pickedcolor;


    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];

    }
    headerChange.style.backgroundColor = "#000000";
    playAgain.textContent = "New Colors";
    //playAgain.style.backgroundColor = "#ffffff";
    headerChange.style.backgroundColor = "#4682b4";

    statusgame.textContent = "";
    // squares.forEach(function(square, index) {
    //     square.style.backgroundColor = colors[index];
    // });

});

easy.addEventListener("click", function() {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    statusgame.textContent = "";
    current = 3;
    colors = generateRandomColors(current);
    pickedcolor = pickColor();
    squares.forEach(function(square, index) {
        if (colors[index]) {
            square.style.backgroundColor = colors[index];
        } else {
            square.style.display = "none";
        }
    });
});

hard.addEventListener("click", function() {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    statusgame.textContent = "";
    current = 6;
    colors = generateRandomColors(current);
    pickedcolor = pickColor();
    squares.forEach(function(square, index) {
        if (square.style.display = "none") {
            square.style.display = "block";
        }
        square.style.backgroundColor = colors[index];
    });

});

headcolor.textContent = pickedcolor;

squares.forEach(function(square, index) {
    square.style.backgroundColor = colors[index];
    square.addEventListener("click", function() {
        var chosencolor = square.style.backgroundColor;
        if (chosencolor === pickedcolor) {
            squares.forEach(function(square1) {
                square1.style.backgroundColor = chosencolor;
            });
            headerChange.style.backgroundColor = chosencolor;
            statusgame.textContent = "Correct";
            playAgain.textContent = "Play Again?";
            //playAgain.style.backgroundColor = chosencolor;


        } else {
            square.style.backgroundColor = "#000000";
            statusgame.textContent = "Try Again";

        }
    })
});

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // var a = "ahahhs" + num1 + "shhshs";
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")");
    }

    return arr;
}

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    return x;
}