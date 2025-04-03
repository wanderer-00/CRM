// кол-во чернил в принтере
let C = document.getElementById("C");
let M = document.getElementById("M");
let Y = document.getElementById("Y");
let K = document.getElementById("K");
let W = document.getElementById("W");

C.value = data_ink[0];
M.value = data_ink[1];
Y.value = data_ink[2];
K.value = data_ink[3];
W.value = data_ink[4];



// кол-во чернил на складе
let consumables = document.getElementById('consumables');

for (i=0; i<5; i++){
    consumables.innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960"><path d="M280-160h400v-80h-80v-280h-80v-80h160v-80H280v80h80v280h80v80H280v80Zm0 80q-33 0-56.5-23.5T200-160v-80q0-33 23.5-56.5T280-320v-200q-33 0-56.5-23.5T200-600v-80q0-33 23.5-56.5T280-760h120v-40h-40v-80h240v80h-40v40h120q33 0 56.5 23.5T760-680v80q0 33-23.5 56.5T680-520v200q33 0 56.5 23.5T760-240v80q0 33-23.5 56.5T680-80H280Zm200-340Z"/></svg>
    `
}