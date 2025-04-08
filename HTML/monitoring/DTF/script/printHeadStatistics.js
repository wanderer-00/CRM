let clusterPHS = document.getElementById('cluster-print-head-stististics');
let time = new Date().getTime(); // текущее время
console.log('кол-во миллисекунд с этого времени: ', time);


let head_0 = new Date(2024, 12, 2).getTime(); // время установки головы №1
let head_1 = new Date(2024, 12, 18).getTime(); // время установки головы №2

console.log('Разница во времени', time - head_0);

//function (){
//    clusterPHS.innerHTML += `
//        <div class="print-head-stististics W">
//            <div class="title">XP-600 WHITE</div>
//            <p>работает 127 / 180 дней  | <b>63.8 %</b></p>
//
//            <div class="progress">
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//            </div>
//        </div>
//`
//};