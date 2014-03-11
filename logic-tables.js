//  NAME:  Tereka Copeland
//  DATE:  March 11, 2014
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;
var i = 0;

while (i < 8) {

p = confirm("First value:  Click OK for true or Cancel for false.");
q = confirm("Second value:  Click OK for true or Cancel for false.");
r = confirm("Third value:  Click OK for true or Cancel for false.");

	

if (p || (q || r)) {
	
    console.log("With " + p + " or " + q + " or " + r + " , the outcome is TRUE.");
    
} else {
	
    console.log("With " + p + " or " + q + " or " + r + ", the outcome is FALSE.");
 };

 i++;

  
};

