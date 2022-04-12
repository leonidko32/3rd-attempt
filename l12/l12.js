
const game = {}
game.board = [1,2,3,4,5,6,7,8," "].sort(()=> Math.random() - 0.5);
game.boardObj = arrToObj(game.board);
game.drawBoard = function drawBoard(){
    for(let a =0; a<3; a++){
        let row =" ";
        for(let i=a*3; i<a*3+3;i++){
            row += this.boardObj[i]+" ";
        }
        console.log(row);
        game.renderBoard();
    }
    return "Your move";
}
game.possibleMove =  function possibleMove(){
    const possibleMoveArr = [];
    for(let i = 0; i<9; i++){
        if(this.boardObj[i-1]===' ' && i !==0 && i !==3 && i !==6){
            possibleMoveArr.push({index:i, number:this.boardObj[i],move:"LEFT"});
        }else if(this.boardObj[i+1]===' ' && i !==2 && i !==5 && i !==8){
            possibleMoveArr.push({index:i, number:this.boardObj[i],move:"RIGHT"});
        }else if(this.boardObj[i-3]===' ' && i !==0 && i !==1 && i !==2){
            possibleMoveArr.push({index:i, number:this.boardObj[i],move:"TOP"});
        }else if(this.boardObj[i+3]===' ' && i !==6 && i !==7 && i !==8){
            possibleMoveArr.push({index:i, number:this.boardObj[i],move:"DOWN"});
        }else possibleMoveArr.push({index:i, number:this.boardObj[i],move:null});
    } 
    return possibleMoveArr;
}
game.possibleMoveArr = game.possibleMove();
game.move = function move(number){
    for(let i=0; i<this.possibleMoveArr.length;i++){
        if(this.possibleMoveArr[i].number === number && this.possibleMoveArr[i].move !== null){
            if(this.possibleMoveArr[i].move === "LEFT"){
                this.boardObj[i-1]=number;
                this.boardObj[i]=" ";
            }else if(this.possibleMoveArr[i].move === "RIGHT"){
                this.boardObj[i+1]=number;
                this.boardObj[i]=" ";
            }else if(this.possibleMoveArr[i].move === "TOP"){
                this.boardObj[i-3]=number;
                this.boardObj[i]=" ";
            }else if(this.possibleMoveArr[i].move === "DOWN"){
                this.boardObj[i+3]=number;
                this.boardObj[i]=" ";
            }else console.log("can`t move that number");
        }
    }
    // this.possibleMoveArr.length=0;
    this.possibleMoveArr = this.possibleMove();
    // game.drawBoard90();
    return game.drawBoard();  
}
game.drawBoard90 = function drawBoard90(){
    console.log('--------');
    for(let a = 0; a<3; a++){    
        let row =" ";
        let m = 2-a;
        for(let i=0; i<3;i++){
            row += this.boardObj[m]+" ";
            m+=3;
        }
        console.log(row);
    }
    return "Your move";
}
game.renderBoard = function(){
    const arr =[];
    for(let i=0; i<=8; i++){           
        const el = createElement('div', props= {className:"cell"}, game.boardObj[i]); 
        if(game.boardObj[i]===' '){
            el.classList.add('empty');
        }
        if(game.possibleMoveArr[i].move !== null){
            el.classList.add('move');
        }   
        el.addEventListener('click',()=>game.move(+el.innerText));
        arr.push(el);
    }
    return render(arr, document.querySelector('.board'));
}




function arrToObj(arr){
    const Obj ={}
    for(let i = 0; i<arr.length; i++ ){
        Obj[i]=arr[i];
    }
    return Obj;
}




game.drawBoard();
//game.drawBoard90();

// const clicking2 = document.querySelector(".clicking2");
// const clicking1 = document.querySelector(".clicking1");
// clicking1.addEventListener('click',()=>console.log(clicking1.innerText));
// clicking2.addEventListener('click',()=>console.log(clicking2.innerText));
// document.addEventListener('keydown', (event)=>console.log(event.key));


// const mainBoard = document.querySelector('.board');
// console.log(mainBoard);







