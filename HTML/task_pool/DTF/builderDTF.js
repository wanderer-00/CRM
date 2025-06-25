let tasksDTF = document.getElementsByClassName('tasksDTF')[0];

// создание карточек с заданиями
for(i=0; i<task_DTF.length; i++){
    tasksDTF.innerHTML += 
    `
    <div class="task${status(task_DTF[i].STATUS)}">
        <div class="work">${task_DTF[i].WORK}</div>
        <div class="client">${task_DTF[i].CLIENT}</div>
        <div class="product">${task_DTF[i].PRODUCT}</div>
        <div>Цвет: <div style="display: inline-block; border: 1px solid #FFF; border-radius:50%; background-color:${task_DTF[i].COLOR}; height: 14px; width: 14px"></div></div>
        <div class="article">${task_DTF[i].ARTICLE}</div>
        <div class="quantity">${task_DTF[i].QUANTITY} шт.</div>
        <div class="term">${task_DTF[i].TERM}</div>
        <div class="note">${task_DTF[i].NOTE}</div>
        <div class="status">${statusIcon(task_DTF[i].STATUS)}</div>
    </div>
    `;
}

// присвоение статуса работе
function status(s) {
    if      (s==0) {return " fire"}
    else if (s==1) {return " suspended"}
    else    {return ""}
}

function statusIcon(si) {
    if      (si==0) {return "<img src='SVG/fire.svg' title='Срочный заказ'>"}
    else if (si==1) {return "<img src='SVG/warning.svg' title='Отложенный заказ'>"}
    else    {return ""}
}