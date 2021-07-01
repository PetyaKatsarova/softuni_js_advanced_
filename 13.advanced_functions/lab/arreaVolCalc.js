function solve(area, vol, arr){
    let arrCoor = JSON.parse(arr);
    let resultArr = [];

    for(const row of arrCoor){
        let resultObj = {
            area: area.call(row),
            volume: vol.call(row)
        }
        resultArr.push(resultObj);
    }
    return resultArr;
}

function area() {
        return Math.abs(this.x * this.y);
};
function vol() {
        return Math.abs(this.x * this.y * this.z);
};

solve(area, vol, '[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]');
    // [
    //     { area: 2, volume: 20 },
    //     { area: 49, volume: 490 },
    //     { area: 10, volume: 100 }
    //     ]