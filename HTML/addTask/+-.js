var plusMinus = document.body.getElementsByClassName('plusMinus')[0];

function plus() {
    plusMinus.value = parseInt(plusMinus.value) + 1
}

function minus() {
    if(plusMinus.value == 1){
        alert('😡')
    } else {
        plusMinus.value -= 1
    }
}