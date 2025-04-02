let cmdResult = document.getElementById('cmdResult');
let cmd = document.getElementsByClassName('cmd')[0];
console.log(cmd);

cmdResult.onclick = myFunction;

function myFunction() {
    for (i = 0; i < 10; i = i + 2) {
        let a = document.getElementsByTagName('input')[i].value;
        let b = document.getElementsByTagName('input')[i + 1].value = a / 40;
        console.log(b);
    }
}