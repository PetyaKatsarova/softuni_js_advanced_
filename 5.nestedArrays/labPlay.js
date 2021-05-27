function sumDiagonals(outerArr){
    let firstDiagonal = 0; 
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = outerArr[0].length - 1;

    outerArr.forEach(innerArr => {
        firstDiagonal += innerArr[firstIndex++];
        secondDiagonal += innerArr[secondIndex--];
    });
    console.log(firstDiagonal);
    console.log(secondDiagonal);
}

sumDiagonals([
    [4,5,6],
    [6,5,4],
    [5,5,5]
    ]);


