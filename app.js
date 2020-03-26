$(document).ready(() => {
    ChessBoard();
});

function ChessBoard() {
    let blackBoard = ["Tour", "Cavalier", "Fou", "Reine", "Roi", "Fou", "Cavalier", "Tour", "Pion", "Pion", "Pion", "Pion","Pion", "Pion","Pion", "Pion"];
    let whiteBoard = ["Tour", "Cavalier", "Fou", "Roi", "Reine", "Fou", "Cavalier", "Tour", "Pion", "Pion","Pion", "Pion","Pion", "Pion","Pion", "Pion"];
    let caseClass = "blanc";

    function showCase(nb, color, board) {
        switch(color) {
            case "NOIR" : rep = board[nb] + " NOIR"; break;
            case "BLANC" : rep = board[nb] + " BLANC"; break;
        }
        return rep;
    }

    for(let i = 1; i <= 64; i++) {
        element = document.createElement('div');
        element.className = caseClass + " case";
        if(i <= 16)
            element.innerHTML = showCase(i-1, "NOIR", blackBoard)
        if(i > 48)
            element.innerHTML = showCase(64-i, "BLANC", whiteBoard)
        if(i % 8 != 0)
            caseClass == "blanc" ?
            caseClass = "noir" :
            caseClass = "blanc";
        document.getElementById("jeu").appendChild(element);
    }
}