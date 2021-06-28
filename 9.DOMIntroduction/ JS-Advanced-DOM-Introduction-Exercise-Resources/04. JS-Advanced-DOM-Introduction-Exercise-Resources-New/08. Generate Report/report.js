//You must generate a JSON report from the data inside the table, by only taking the columns, which
//are selected.
// Each table header has a checkbox. If the checkbox is checked, then the data from this column must be included in the report. Unchecked columns must be omitted.
// For every row (excluding the header:
//      Create an object with properties for each of its columns;
//      The name of each property is the name attribute of the column’s header, and the value is the text
//     content of the cell;
//      Store the result in an array and output it as a JSON string display it inside the &lt;textarea&gt; with id
 //   “output”. See the example for details.

function generateReport() {
    let inputs = document.querySelectorAll('th input');
    let info = document.querySelectorAll('tbody tr');
    let result = [];

    for(let i=0; i<info.length; i++){
        let td = info[i].querySelectorAll('td');
        for(let j=0; j<td.length; j++){
            if(inputs[j].checked){
               let obj = {}
               obj[inputs[j].name] = td[j].textContent;
               result.push(obj);
            }
        }
        // console.log('-----------------------------------------');
    }
    document.getElementById('output').value = JSON.stringify(result);
    // console.log(JSON.stringify(result));
}