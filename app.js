// WAITING MY DOCUMENT TO BE READY BEFORE SETTING UP MY CHESSBOARD
$(document).ready(() => {
    chessBoard();
    setupStyle();
    $(window).resize(() => {
        setupStyle();
    });
});

// MORE OPTIMIZED

function chessBoard() {
    // SETTING THINGS I NEED LIKE CHESS PIECES AND THE STARTING BACKGROUND COLOR
    let blackBoard = ["black_tower", "black_knight", "black_bishop", "black_queen", "black_king", "black_bishop", "black_knight", "black_tower", "black_pawn", "black_pawn", "black_pawn", "black_pawn","black_pawn", "black_pawn","black_pawn", "black_pawn"];
    let whiteBoard = ["white_tower", "white_knight", "white_bishop", "white_king", "white_queen", "white_bishop", "white_knight", "white_tower", "white_pawn", "white_pawn","white_pawn", "white_pawn","white_pawn", "white_pawn","white_pawn", "white_pawn"];
    let caseClass = "blanc";

    for(let i = 1; i <= 64; i++) {
        // CREATING THE DIV
        element = document.createElement('div');
        // ADDING HER CLASS + MY CSS CLASSES NEEDED
        element.className = caseClass + " case";
        // FOR EACH DIV I MAKE, BY THE VALUE OF "i" I KNOW WHAT CHESS PIECE I NEED TO ADD IN THE TAG
        element.innerHTML = (i <= 16) ? "<img src='img/" + blackBoard[i-1] + ".png'>" : (i > 48) ? "<img src='img/" + whiteBoard[64-i] + ".png'>" : "";
        // EVERY SINGLE ROW, I SWITCH BACKGROUND COLOR CLASSES SO I GET A PERFECT CHESSBOARD SETUP
        if(i % 8 != 0) {
            caseClass == "blanc" ? caseClass = "noir" : caseClass = "blanc";
        }
        // AND THEN, I ADD MY CREATED DIV WITH ALL SPECS IN MY DOCUMENT
        document.getElementById("jeu").appendChild(element);
    }
}

function setupStyle() {
    let wrapper = $("#wrapper").width();
    $("#wrapper").css({
        "height" : wrapper
    });
    let width = $("#wrapper").width()/8;
    let height = width;
    $(".case").css({
        "width" : width,
        "height" : height
    });
}