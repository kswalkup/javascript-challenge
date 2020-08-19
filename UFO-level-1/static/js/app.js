// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(ufoReport){
    console.log(ufoReport);
    var row = tbody.append('tr');
    Object.values(ufoReport).forEach(function (value){
        console.log(value);
        row.append('td').text(value);
    });
});

var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-group");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
var inputElement = d3.select('#datetime');
    // Get the value property of the input element
var inputValue = inputElement.property('value')

var datetimeFilteredData = tableData.filter(ufoData=> ufoData.datetime === inputValue);
console.log(datetimeFilteredData);




// var list = d3.select('thead')

// list.append('th').text(datetimeFilteredData);
// 




};

