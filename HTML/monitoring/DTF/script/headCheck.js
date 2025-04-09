function headCheck() {
    let CMYK = document.getElementById('head1');


    let block = 0;
    let column = 0;
    let row = 1;
    let width = 20;

    let channelColor = ['rgb(1, 1, 1)', 'rgb(248, 245, 1)', 'rgb(1, 169, 236)', 'rgb(228, 1, 123)', 'rgb(1, 169, 236)', 'rgb(228, 1, 123)']

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

    let white = document.getElementById('head2');

    for (block; block < 6; block++) {
        for (column; column < 4; column++) {
            for (row; row < 45; row++) {
                white.innerHTML += `<line x1="${column*width+block*4*width}" y1="${row*4+column}" x2="${column*width+width+block*4*width}" y2="${row*4+column}" stroke="white" stroke-width="1" />`;
            };
            row = 0;
        };
        column = 0;
    }
}