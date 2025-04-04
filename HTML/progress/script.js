let cluster = document.getElementById('cluster');

for(i=0; i<DTFProgress.length; i++){
    cluster.innerHTML +=
`
<tr>
    <td>${DTFProgress[i][0]}</td>
    <td><progress max="${DTFProgress[i][2]}" value="${DTFProgress[i][1]}"></progress></td>
    <td class="a">${DTFProgress[i][1]} / ${DTFProgress[i][2]}</td>
</tr>
`
}