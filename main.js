let elbob = document.querySelector(".bob");

let dol = 750;
let yev = 120;

let narx = dol * 12250 + yev * 13005;
let prom = +prompt("summani kiriting");

if (narx < prom) {
  elbob.textContent = "oq yo'l";
} else {
  elbob.textContent = "hali ishla bratishka";
}
