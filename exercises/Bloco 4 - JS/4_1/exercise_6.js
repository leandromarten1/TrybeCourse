
let namePiece = "Queen";
let chessPiece = namePiece.toLowerCase();


switch (chessPiece){    
    case "pawn":
        text = "Pawn -> Can only go forward and capture diagonally";
        console.log(text);
        break;
    case "knight":
        text = "Knight -> Can moves in L shapes";
        console.log(text);
        break;
    case 3:
        text = "Bishop -> Can move diagonals";
        console.log(text);
        break;
    case "rook":
        text = "Rook -> Can move straight";
        console.log(text);
        break;
    case "queen": 
        text = "Queen -> Can move straight and diagonals";
        console.log(text);
        break;
    case "king":
        text = "King -> Can move in any directions";   
        console.log(text);  
        break;  
    default:
        text = "Error: is not a chess piece!";
        console.log(text);
        break;  
}