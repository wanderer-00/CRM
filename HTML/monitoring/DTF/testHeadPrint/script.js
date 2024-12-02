let CMYK = document.getElementsByTagName("svg")[0];


let block = 0;
let column = 0;
let row = 1;
let width = 20;

let channelColor = ['black', 'yellow', 'lightblue', 'pink', 'lightblue', 'pink']

for (block; block < 6; block++) {
    for (column; column < 4; column++) {
        for (row; row < 45; row++) {
            CMYK.innerHTML += `<line x1="${column*width+block*4*width}" y1="${row*4+column}" x2="${column*width+width+block*4*width}" y2="${row*4+column}" stroke="${channelColor[block]}" stroke-width="1" />`;
        };
        row = 0;
    };
    column = 0;
}


block = 0;
column = 0;
row = 1;
width = 20;

let white = document.getElementsByTagName("svg")[1];

for (block; block < 6; block++) {
    for (column; column < 4; column++) {
        for (row; row < 45; row++) {
            white.innerHTML += `<line x1="${column*width+block*4*width}" y1="${row*4+column}" x2="${column*width+width+block*4*width}" y2="${row*4+column}" stroke="white" stroke-width="1" />`;
        };
        row = 0;
    };
    column = 0;
}
