var menu = document.getElementById('menu');

for(i=0; i<6; i++){
menu.innerHTML += `
    <a class="box" id="DTF" href="HTML/monitoring/DTF/index.html" title="Состояние DTF">
        <div class="ico" style="background-image: url(HTML/monitoring/DTF/icon.svg)"></div>
    </a>
`;
}