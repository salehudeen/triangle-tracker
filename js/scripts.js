function track(){
var l1=document.getElementById("l1")
var l2=document.getElementById("l2")
var l3=document.getElementById("l3")

var a=[parseFloat(l1)];
var b= [parseFloat(l2)];
var c= [parseFloat(l3)];

if (a+b<= c||a+c<=b||b+c<=a) {
    document.getElementById("result").innerHTML = "Hey There This isnt a triangle";
  } else if (a === b & b === c & a > 0 & b > 0 & c > 0) {
    document.getElementById("result").innerHTML = "Equilateral Triangle.";
  } else if (a === b & b !== c || a !== b & b === c & a & a > 0 & b > 0 & c > 0) {
    document.getElementById("result").innerHTML = "Isosceles Triangle";
  } else if (a !== b & b !== c & a >  0 & b> 0 & c > 0) {
    document.getElementById("result").innerHTML = "Scalene Triangle";;
  } else {
    document.getElementById("result").innerHTML = "Invalid Measurements";
  };
}

function reset() {
  document.getElementById("myform").reset();
  document.getElementById("result").innerHTML = "Try other figures";
}
