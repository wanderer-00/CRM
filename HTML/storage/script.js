let cluster = document.getElementsByClassName("cluster")[0];

for (i = 0; i < data_paper.length; i++) {
    cluster.innerHTML += `
<div class="element">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 32">
        <style>
            text {
                fill: #BBB;
                font: 8px sans-serif;
            }
        </style>
        <g>
            <polygon fill="#FFF" points="0,10 0,32 45,32 45,0 10,0 " />
            <polygon fill="#EEE" points="0,10 10,10 10,0 " />
            <text x="8" y="24" class="small">${data_paper[i].density} г/м²</text>
        </g>
    </svg>
    <p>${data_paper[i].quantity} шт</p>
</div>
`
}

for (t = 0; t < data_toner.length; t++) {
    cluster.innerHTML += `
<div class="element" class="toner">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45000 32000">
    <defs>
        <style type="text/css">
            <![CDATA[
            .str0 {
                stroke: white;
                stroke-width: 600;
                stroke-miterlimit: 23
            }

            .fil0 {
                fill: none
            }

            .color {fill: red}
            ]]>
        </style>
    </defs>
    <g>
        <rect class="color" x="10935.25" y="15500" width="31216.39" height="3500" stroke-width="0" />
        <rect class="fil0 str0" x="10935.25" y="13000" width="31216.39" height="6000" />
        <rect class="fil0 str0" x="9839.55" y="13892.48" width="1095.71" height="4267.44" />
        <rect class="fil0 str0 color" x="2839.55" y="13000" width="7000" height="6000" />
        <line class="fil0 str0" x1="11588.14" y1="13000" x2="13763.43" y2="19000" />
        <line class="fil0 str0" x1="14088.14" y1="13000" x2="16263.43" y2="19000" />
        <line class="fil0 str0" x1="16588.14" y1="13000" x2="18763.43" y2="19000" />
        <line class="fil0 str0" x1="19088.14" y1="13000" x2="21263.43" y2="19000" />
        <line class="fil0 str0" x1="24088.14" y1="13000" x2="26263.43" y2="19000" />
        <line class="fil0 str0" x1="29088.14" y1="13000" x2="31263.43" y2="19000" />
        <line class="fil0 str0" x1="34088.14" y1="13000" x2="36263.43" y2="19000" />
        <line class="fil0 str0" x1="39088.14" y1="13000" x2="41263.43" y2="19000" />
    </g>
</svg>
    <p>${data_toner[t].quantity} шт</p>
</div>
`
}

function color_toner() {
    
    
}
