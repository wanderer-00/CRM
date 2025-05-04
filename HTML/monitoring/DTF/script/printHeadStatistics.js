let clusterPHS = document.getElementById('cluster-print-head-stististics');

let time = new Date(); // время сейчас

// голова #0 | причина смерти: просроченный сольвент
let timeSet0 = new Date('12-02-2024'); // дата установки
let timeEnd0 = new Date('05-04-2025'); // дата снятия
// голова #1 | работает
let timeSet1 = new Date('12-18-2024');
let timeEnd1 = new Date('05-04-2025');
// голова #2 | работает
let timeSet2 = new Date('05-04-2025');
let timeEnd2 = new Date('??-??-????');
// голова #3 | планируется ставить
let timeSet3 = new Date('05-04-2025');
let timeEnd3 = new Date('??-??-????');

// вызов функции отрисовки блоков голов
// дата_установки дата_снятия назначение_головы
builder(timeSet0, timeEnd0, 'WHITE'); // голова #0
builder(timeSet1, time, 'CMYK'); // голова #1
builder(timeSet2, time, 'WHITE'); // голова #2
builder(timeSet3, time, 'CMYK'); // голова #3

// отрисовка виджета
function builder(days, time, color){
    // кол-во дней прошедших с установки
//    var days = Math.ceil(Math.abs(days.getTime() - time.getTime()) / (1000 * 3600 * 24));
    var days = Math.ceil(Math.abs(days.getTime() - Math.abs(time.getTime())) / (1000 * 3600 * 24));
    
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