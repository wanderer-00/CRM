let tasks = document.getElementsByClassName('tasks')[0];

for(i=0; i<task.length; i++){
    tasks.innerHTML += 
    `
    <div class="task">
        <div class="work">${task[i].WORK}</div>
        <div class="client">${task[i].CLIENT}</div>
        <div class="product">${task[i].PRODUCT}</div>
        <div class="article">${task[i].ARTICLE}</div>
        <div class="quantity">${task[i].QUANTITY}</div>
        <div class="term">${task[i].TERM}</div>
        <div class="note">${task[i].NOTE}</div>
    </div>
    `;
}