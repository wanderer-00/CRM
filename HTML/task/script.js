let tasks = document.getElementsByClassName('tasks')[0];

for(i=0; i<task.length; i++){
    tasks.innerHTML += 
    `
    <div class="task${status(task[i].STATUS)}">
        <div class="work">${task[i].WORK}</div>
        <div class="client">${task[i].CLIENT}</div>
        <div class="product">${task[i].PRODUCT}</div>
        <div>Цвет: <div style="display: inline-block; border: 1px solid #FFF; border-radius:50%; background-color:${task[i].COLOR}; height: 14px; width: 14px"></div></div>
        <div class="article">${task[i].ARTICLE}</div>
        <div class="quantity">${task[i].QUANTITY} шт.</div>
        <div class="term">${task[i].TERM}</div>
        <div class="note">${task[i].NOTE}</div>
        <div class="status">${statusIcon(task[i].STATUS)}</div>
    </div>
    `;
}

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