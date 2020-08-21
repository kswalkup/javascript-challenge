// from data.js
var tableData = data;
var button = d3.select("#filter-btn");
var form = d3.select("#form-group");
var tbody = d3.select("tbody");

data.forEach(function(ufoReport){
    console.log(ufoReport);
    var row = tbody.append('tr');
    Object.values(ufoReport).forEach(function (value){
        console.log(value);
        row.append('td').text(value);
    });
});

button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {

    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    tbody.html("")
    var inputElement = d3.select('#datetime');
    // Get the value property of the input element
    var inputValue = inputElement.property('value')

    var dateTimeData = tableData.filter(ufoData=> ufoData.datetime === inputValue);
    console.log(dateTimeData);

    dateTimeData.forEach(function(ufoDateReport){
        console.log(ufoDateReport);
        var row = tbody.append('tr');
        Object.values(ufoDateReport).forEach(function (value){
            console.log(value);
            tbody.append('td').text(value);
        });
    });

};


