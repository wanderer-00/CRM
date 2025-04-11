// код нуждается в оптимизации
let clusterPHS = document.getElementById('cluster-print-head-stististics');

var time = new Date(); // время сейчас

var timeSet0 = new Date('12-02-2024'); // дата установки головы #0
var timeSet1 = new Date('12-18-2024'); // дата установки головы #1

builder(timeSet0, 'WHITE');
builder(timeSet1, 'CMYK');

// отрисовка виджета
function builder(days, color){
    // кол-во дней прошедших с установки
    var days = Math.ceil(Math.abs(days.getTime() - time.getTime()) / (1000 * 3600 * 24));
    
    clusterPHS.innerHTML += `
        <div class="print-head-stististics">
            <div class="title">XP-600 ${color}</div>
            <p>работает ${days} / 180 дней  | <b>${Math.floor(days/(180/100))}%</b></p>

            <div class="progress">${loading(days)}</div>
        </div>
    `;
};

// отрисовка красных палочек
function loading(a) {
	let i = 0;
	let bufer = '';
	for (; i < a / 10 && i<18; i++) {bufer+='<div style = "background-color: red" ></div>'};
	for (; i < 18; i++) {bufer+='<div style = "background-color: grey" ></div>'};
	return bufer
}