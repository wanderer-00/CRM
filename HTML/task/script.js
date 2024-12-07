let tasks = document.getElementsByClassName('tasks')[0];

for(i=0; i<task.length; i++){
    tasks.innerHTML += 
    `
    <div class="task${status(task[i].STATUS)}">
        <div class="work">${task[i].WORK}</div>
        <div class="client">${task[i].CLIENT}</div>
        <div class="product">${task[i].PRODUCT}</div>
        <div class="article">${task[i].ARTICLE}</div>
        <div class="quantity">${task[i].QUANTITY}</div>
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
    if      (s==0) {return "<img src='fire.svg'>"}
    else if (s==1) {return " suspended"}
    else    {return ""}
}