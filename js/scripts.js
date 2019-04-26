function triangle(l1,l2,l3){
var l1=prompt("enter l1")
var l2=prompt("enter l2")
var l3=prompt("enter l3")

if (l1+l2<=l3||l2+l3<=l1||l1+l3<=l2){
alert("Sorry this is not a Triangle")
}
if (l1===l2 & l2===l3){
alert("equilateral triangle")
}
if (l1===l2 & l2!==l3 || l1!==l2 & l2==l3){
alert("isoselice triangle")
}
if (l1!==l2 & l2!==l3){
alert("scalene triangle")
}
}
triangle();
