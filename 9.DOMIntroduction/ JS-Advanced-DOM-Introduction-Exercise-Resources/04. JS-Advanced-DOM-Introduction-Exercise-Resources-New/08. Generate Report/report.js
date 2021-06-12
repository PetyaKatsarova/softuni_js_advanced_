//You must generate a JSON report from the data inside the table, by only taking the columns, which
//are selected.
// For every row (excluding the header:
//      Create an object with properties for each of its columns;
//      The name of each property is the name attribute of the column’s header, and the value is the text
//     content of the cell;
//      Store the result in an array and output it as a JSON string display it inside the &lt;textarea&gt; with id
 //   “output”. See the example for details.

function generateReport() {
    let inputs = document.querySelectorAll('th input');
    console.log(inputs);
}