let tasks_DP = document.getElementById('tasks_DP');

// создание карточек с заданиями
for(i=0; i<task_DP.length; i++){
    tasks_DP.innerHTML += 
    `
    <div class="task${status(task_DP[i].STATUS)}">
        <div class="client">${task_DP[i].CLIENT}</div>
        <div class="article">${task_DP[i].ARTICLE}</div>
        <div class="article">${task_DP[i].QUANTITY}</div>
        <div class="article">${task_DP[i].NOTE}</div>
        <div class="article">${task_DP[i].TERM}</div>
        <div class="status">${statusIcon(task_DP[i].STATUS)}</div>
    </div>
    `;
}

//    <div class="task${status(task_DP[i].STATUS)}">
//        <div class="client">${task_DP[i].CLIENT}</div>
//        <div class="product">${task_DP[i].PRODUCT}</div>
//        <div class="article">${task_DP[i].ARTICLE}</div>
//        <div class="quantity">${task_DP[i].QUANTITY} шт.</div>
//        <div class="term">📅 ${task_DP[i].TERM}</div>
//        <div class="status">${statusIcon(task_DP[i].STATUS)}</div>
//    </div>