function tic_tak_toe(arr){
   let board = [[false, false, false],
                [false, false, false],
                [false, false, false]];

    let isPlayerX = true;
    for(let i=0; i<arr.length; i++){
        let[row,col] = arr[i].split(' ').map(el=>Number(el));
      
        if(board[row][col] !== false){
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        
        board[row][col] = isPlayerX ? 'X' : 'O';
        if(hasGameEnded(board)) break;
        isPlayerX = !isPlayerX;
    }
    board.forEach(el => {
        console.log(el.join('\t'));
    });
    

    function hasGameEnded(board){
         
            //winner for col
            for(let i=0; i<board.length; i++){
                if(board[0][i] ===  board[1][i] &&
                    board[1][i] === board[2][i] &&
                    board[0][i] !== false){
                        console.log(`Player ${board[0][i]} wins!`);
                        return true;
                   }
            }

        // declare winner for row
        for(let row=0; row<board.length; row++){
            let isSameX = board[row].every(el=>el==='X');
            let isSameY = board[row].every(el=>el==='O');
            if(isSameX || isSameY){
                console.log(`Player ${isSameX ? 'X':'O'} wins!`);
                return true;
            }
        }
            //winner for first diagonal:cant have equal for 3 el, only for 2!!
        if(board[0][0] !== false && board[0][0] === board[1][1] && board[1][1]=== board[2][2]){
            console.log(`Player ${board[0][0]} wins!`);
            return true;
        }
            //winner for second diagonal:cant have equal for 3 el, only for 2!!
            if(board[0][2] !== false && board[0][2] === board[1][1] && board[1][1]=== board[2][0]){
                console.log(`Player ${board[0][2]} wins!`);
                return true;
            }

        // no winner
        
        if(board[0].every(el => el !== false) &&
           board[1].every(el => el !== false) && 
           board[2].every(el => el !== false)){
                console.log('The game ended! Nobody wins :(');
                return true;
        }
        return false;
    }

}

tic_tak_toe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);
// Player O wins!
// O	X	X
// X	O	X
// O	false	O
tic_tak_toe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]);
// This place is already taken. Please choose another!
// Player X wins!
// X	X	X
// false	O	O
// false	false	false
tic_tak_toe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);
// The game ended! Nobody wins :(
//     O	X	X
//     X	X	O
//     O	O	X
