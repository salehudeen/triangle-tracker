function track() {
  var length1 = document.getElementById("l1").value;
  var length2 = document.getElementById("l2").value;
  var length3 = document.getElementById("l3").value;

  var p = [parseFloat(length1)];
  var q = [parseFloat(length2)];
  var r = [parseFloat(length3)];

  var ab = p.concat(q);

  var abc = ab.concat(r);

  var sorted = abc.sort(function (d, e) {
    return d - e;
  });

  var a = sorted[0];
  var b = sorted[1];
  var c = sorted[2];

  var lengthab = a + b;

  if (lengthab < c) {
    document.getElementById("result").innerHTML = "Hey there, not a triangle";
  } else if (a === b && b === c && a > 0 && b > 0 && c > 0) {
    document.getElementById("result").innerHTML = "Equilateral Triangle.";
  } else if (a === b && b !== c || a !== b && b === c && a > 0 && b > 0 && c > 0) {
    document.getElementById("result").innerHTML = "Isosceles Triangle";
  } else if (a !== b && b !== c && (Number.isInteger(a) === true || Number.isInteger(b) === true || Number.isInteger(c) === true) && a > 0 && b > 0 && c > 0) {
    document.getElementById("result").innerHTML = "Scalene Triangle";;
  } else {
    document.getElementById("result").innerHTML = "Invalid Measurements";
  };
}
