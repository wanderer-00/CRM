let C = document.getElementById("C");
let M = document.getElementById("M");
let Y = document.getElementById("Y");
let K = document.getElementById("K");

C.value = data_ineo.INK[0];
M.value = data_ineo.INK[1];
Y.value = data_ineo.INK[2];
K.value = data_ineo.INK[3];

let box_1 = document.getElementById("box-1").textContent = `${data_ineo.PAPER[0]}%`;
let box_2 = document.getElementById("box-2").textContent = `${data_ineo.PAPER[1]}%`;
let box_3 = document.getElementById("box-3").textContent = `${data_ineo.PAPER[2]}%`;
let box_4 = document.getElementById("box-4").textContent = `${data_ineo.PAPER[3]}%`;