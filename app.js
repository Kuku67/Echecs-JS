// WAITING MY DOCUMENT TO BE READY BEFORE SETTING UP MY CHESSBOARD
$(document).ready(() => {
    ChessBoard();
});

// MORE OPTIMIZED

function ChessBoard() {
    // SETTING THINGS I NEED LIKE CHESS PIECES AND THE STARTING BACKGROUND COLOR
    let blackBoard = ["Tour", "Cavalier", "Fou", "Reine", "Roi", "Fou", "Cavalier", "Tour", "Pion", "Pion", "Pion", "Pion","Pion", "Pion","Pion", "Pion"];
    let whiteBoard = ["Tour", "Cavalier", "Fou", "Roi", "Reine", "Fou", "Cavalier", "Tour", "Pion", "Pion","Pion", "Pion","Pion", "Pion","Pion", "Pion"];
    let caseClass = "blanc";

    for(let i = 1; i <= 64; i++) {
        // CREATING THE DIV
        element = document.createElement('div');
        // ADDING HER CLASS + MY CSS CLASSES NEEDED
        element.className = caseClass + " case";
        // FOR EACH DIV I MAKE, BY THE VALUE OF "i" I KNOW WHAT CHESS PIECE I NEED TO ADD IN THE TAG
        element.innerHTML = (i <= 16) ? blackBoard[i-1] + " NOIR" : (i > 48) ? whiteBoard[64-i] + " BLANC" : "";
        // EVERY SINGLE ROW, I SWITCH BACKGROUND COLOR CLASSES SO I GET A PERFECT CHESSBOARD SETUP
        if(i % 8 != 0) {
            caseClass == "blanc" ? caseClass = "noir" : caseClass = "blanc";
        }
        // AND THEN, I ADD MY CREATED DIV WITH ALL SPECS IN MY DOCUMENT
        document.getElementById("jeu").appendChild(element);
    }
}

// LESS OPTIMIZED

// function ChessBoard() {

//     let blackBoard = ["Tour", "Cavalier", "Fou", "Reine", "Roi", "Fou", "Cavalier", "Tour", "Pion", "Pion", "Pion", "Pion","Pion", "Pion","Pion", "Pion"];
//     let whiteBoard = ["Tour", "Cavalier", "Fou", "Roi", "Reine", "Fou", "Cavalier", "Tour", "Pion", "Pion","Pion", "Pion","Pion", "Pion","Pion", "Pion"];
//     let caseClass = "blanc";

//     function showCase(nb, color, board) {
//         switch(color) {
//             case "NOIR" : rep = board[nb] + " NOIR"; break;
//             case "BLANC" : rep = board[nb] + " BLANC"; break;
//         }
//         return rep;
//     }

//     for(let i = 1; i <= 64; i++) {
//         element = document.createElement('div');
//         element.className = caseClass + " case";
//         if(i <= 16)
//             element.innerHTML = showCase(i-1, "NOIR", blackBoard)
//         if(i > 48)
//             element.innerHTML = showCase(64-i, "BLANC", whiteBoard)
//         if(i % 8 != 0)
//             caseClass == "blanc" ?
//             caseClass = "noir" :
//             caseClass = "blanc";
//         document.getElementById("jeu").appendChild(element);
//     }
// }

