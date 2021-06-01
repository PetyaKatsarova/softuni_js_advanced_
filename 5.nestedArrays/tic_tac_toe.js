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
        isPlayerX = !isPlayerX;
        let gameEnded = hasGameEnded(board);
        if(gameEnded) break;
    }
    

    function hasGameEnded(board){
        // declare winner for row
        for(let row=0; row<board.length; row++){
            let isSameX = board[row].every(el=>el==='X');
            let isSameY = board[row].every(el=>el==='O');
            if(isSameX || isSameY){
                console.log(`Player ${isSameX ? 'X':'O'} wins!`);
                return;
            }
            //echo for no winner
            
        }
        //winner for col

        



        // no free space
        console.log('hi from func');
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