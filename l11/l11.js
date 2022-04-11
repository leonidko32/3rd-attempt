function Board(){
    this.board = this.convertArrayToBoard(
        Board.START_BOARD.sort(()=>Math.random()-0.5));
}

Board.START_BOARD = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'empty'];
Board.prototype.convertArrayToBoard=function convertArrayToBoard (boardArray){
    return boardArray.reduce(
        (board, cell, idx) => {
            board[idx]=cell;
            return board;
        },{}
    );
}
Board.prototype.render = function render(){
    console.log('---board---');
    for(let row = 0; row<4; row++){
        let rowStr = '';

        for(let col=0; col<4; col++){
            rowStr += this.board[col+row]+' ';
        }
        console.log(rowStr);
    }
    console.log('---board---');
}


const board = new Board();

console.log(board);
console.log(board.prototype.render());