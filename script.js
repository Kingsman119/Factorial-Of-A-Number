document.getElementById("btn").onclick = function () {
  const val = document.getElementById("val").value;
  let res = 1;

  if (val === 0) {
    res = 1;
  }
  for (let i = 2; i <= val; i++) {
    res = res * i;
  }

  document.getElementById("res").innerHTML =
    " Factorial Of Number " + val + " Is " + res;
}
