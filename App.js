

// Exercise # 1

var studentName = [];
 
// Exercise # 2

var stdName  = new Array();

// Exercise # 3

var studentName = ["Nasir", "Ali", "Raza", "Abbas"];


// Exercise # 4

var evenNumber = [2, 4, 6, 8, 10, 12, 14];

// Exercise # 5

var boolArray = [true, false, true, false];

// Exercise # 6

var mixArray = [1, "Mixed", 2, "Array", 3, true, 4, false];



// Exercise # 7

var mobNetworksPakistan = ["Ufone", "Telenor", "Jazz", "Zong"];

// Exercise # 8

var qualInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications:</h1>");

for (var i = 0; i < qualInPakistan.length; i++ ){
    document.write(i + 1 + ") " + qualInPakistan[i] + "<br />");
}



// Exercise # 9

var topMovies2015 = [];

topMovies2015.push("Avengers: Age Of Ultron");
topMovies2015.push("Spectre");
topMovies2015.push("Jurrasic World");
topMovies2015.push("Inside Out");

document.write("<h1>Top movies of 2015:</h1>");

for (var i = 0; i < topMovies2015.length; i++ ){
    document.write(i + 1 + ") " + topMovies2015[i] + "<br />");
}

document.write("<br /><h2>Length of the array: " + topMovies2015.length + "</h2>");

// Exercise # 10

var favCars = ["Audi", "Volvo", "Ford", "Lamborghini"];

document.write("<h1>Favorite Cars:</h1>");

for (var i = 0; i < favCars.length; i++ ){
    if ( i == 0 || i == favCars.length-1){
        let counter = i == 0 ? "First" : "Last";
        document.write(counter + " index of the array: " + i + "<br />");
        document.write("Car at " + counter.toLowerCase() + " index of the array: " + favCars[i] + "<br />");
    }
}

// Exercise # 11

stdName = ["Michael", "Jhon", "Tony"];
obtMarks = [320, 230, 480]

document.write("<h1>Student Marks:</h1>");

for (var i = 0; i < stdName.length; i++ ){
        document.write("Score of " + stdName[i] + " is " + obtMarks[i] + ". Percentage: " + Math.round(((obtMarks[i] / 500)*100)) + "%<br />");
}

// Exercise # 12

var colours = ["Red", "Green", "Blue", "Yellow", "Black"];


document.write("<h1>Colors:</h1>");
document.write(colours + "<br />");

var begColor = prompt("Please enter the color you wants to add at the beginning of array");
colours.unshift(begColor);
document.write(colours + "<br />");

var endColor = prompt("Please enter the color you wants to add at the end of array");
colours.push(endColor);
document.write(colours + "<br />");

colours.unshift("Violet", "Brown");
document.write(colours + "<br />");

colours.shift();
document.write(colours + "<br />");

colours.pop();
document.write(colours + "<br />");

var arrayIndex = parseInt(prompt("Please enter the index number on which you want to add color to array"));
endColor = prompt("Please enter the color you wants to add to array");
colours.splice(arrayIndex, 0, endColor);
document.write(colours + "<br />");

arrayIndex = parseInt(prompt("Please enter the index number at which you want to delete color from array"));

var delNumOfColors = parseInt(prompt("Please enter the number that how many colors you want to delete from array"));

colours.splice(arrayIndex, delNumOfColors);
document.write(colours + "<br />");



// Exercise # 13

var stdScores = [320, 230, 480, 120];

document.write("<br />Scores of Students: " + stdScores);
document.write("<br />Ordered Scores of Students: " + stdScores.sort());

// Exercise # 14

var fruits = ["strawberry", "apple", "orange", "banana"];

document.write("<br /><br />Fruits list:<br />" + fruits);
document.write("<br />Ordered fruits list:<br />" + fruits.sort());

// Exercise # 15

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2,5);

document.write("<br /><br />Cities list:<br />" + cities);
document.write("<br /><br />Selected cities list:<br />" + selectedCities);

// Exercise # 16

var animals = ["This ", " is ", " my ", " cat"];

document.write("<br /><br />Array:<br />" + animals);
document.write("<br /><br />String:<br />" + animals.join(""));

// Exercise # 17

var computerDevices = [];

computerDevices.push("keyboard");
computerDevices.push("mouse");
computerDevices.push("printer");
computerDevices.push("monitor");

document.write("<h2>Devices:<br />" + computerDevices + "</h2>");

for (var i = 0; i < computerDevices.length; i++){
    document.write("<br/>Out:<br />" + computerDevices[i]);
}

// Exercise # 18

document.write("<h2>Devices:<br />" + computerDevices + "</h2>");

for (var i = computerDevices.length - 1; i >= 0; i--){
    document.write("<br/>Out:<br />" + computerDevices[i]);
}



// Exercise # 19

phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

var str;

for (var i = 0; i < phoneManufacturers.length; i++){
    if (i == 0){
        str = "<select id='phman' name='phman'>" + "<option value='" + phoneManufacturers[i].toLowerCase() + "'>" + phoneManufacturers[i] + "</option>"
    }
    else{
        str = str + "<option value='" + phoneManufacturers[i].toLowerCase() + "'>" + phoneManufacturers[i] + "</option>"
    }
}
str = str + "</select>"

console.log(str);

document.write("<br /><br />" + str);


// Exercise # 20

var multiDimArray = [
    [,,,,],
    [,,,,],
    [,,,,]
];



// Exercise # 21

var multiDimArray1 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0; i < multiDimArray1.length; i++){
    document.write("<br /><br />" + multiDimArray1[i].join(" "));
}