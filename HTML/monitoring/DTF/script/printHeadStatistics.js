let clusterPHS = document.getElementById('cluster-print-head-stististics');
var date1_0 = new Date();
var date2_0 = new Date('12-02-2024');
var daysLag_0 = Math.ceil(Math.abs(date2_0.getTime() - date1_0.getTime()) / (1000 * 3600 * 24));
console.log(daysLag_0);


var date1_1 = new Date();
var date2_1 = new Date('12-18-2024');
var daysLag_1 = Math.ceil(Math.abs(date2_1.getTime() - date1_1.getTime()) / (1000 * 3600 * 24));
console.log(daysLag_1);


clusterPHS.innerHTML += `
        <div class="print-head-stististics">
            <div class="title">XP-600 WHITE</div>
            <p>работает ${daysLag_0} / 180 дней  | <b>${Math.floor(daysLag_0/(180/100))}%</b></p>

            <div class="progress">
				${abc(daysLag_0)}
            </div>
        </div>
`;

clusterPHS.innerHTML += `
        <div class="print-head-stististics">
            <div class="title">XP-600 CMYK</div>
            <p>работает ${daysLag_1} / 180 дней  | <b>${Math.floor(daysLag_1/(180/100))}%</b></p>

            <div class="progress">
				${abc(daysLag_1)}
            </div>
        </div>
`;

function abc(daysLag) {
	let i = 0;
	let bufer = "";
	for (; i < daysLag / 10 && i<18; i++) {
		bufer+='<div style = "background-color: red" ></div>';
	}
	for (; i < 18; i++) {
		bufer+='<div style = "background-color: grey" ></div>';
	}
	return bufer;
}
