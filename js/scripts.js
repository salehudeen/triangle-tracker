function track() {
  var length1 = document.getElementById("l1").value;
  var length2 = document.getElementById("l2").value;
  var length3 = document.getElementById("l3").value;

  var p = [parseFloat(length1)];
  var q = [parseFloat(length2)];
  var r = [parseFloat(length3)];

  var ab = p.concat(q);

  var abc = ab.concat(r);

  var lengthab = a + b;
  var lengthca = a + c;
  var lengthbc = b + c;

  if (lengthab < c || lengthca < b || lengthbc < a) {
    document.getElementById("result").innerHTML = "hey there this isnt a triangle!";
  } else if (a === b && b === c && a > 0 && b > 0 && c > 0) {
    document.getElementById("result").innerHTML = "Equilateral Triangle.";
  } else if (a === b && b !== c || a !== b && b === c && a > 0 && b > 0 && c > 0) {
    document.getElementById("result").innerHTML = "Isosceles Triangle";
  } else if (a !== b && b !== c && (Number.isInteger(a) === true || Number.isInteger(b) === true || Number.isInteger(c) === true) && a > 0 && b > 0 && c > 0) {
    document.getElementById("result").innerHTML = "Scalene Triangle";;
  } else {
    document.getElementById("result").innerHTML = "wrong values";
  };
}
