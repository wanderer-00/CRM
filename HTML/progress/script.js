let cluster = document.getElementById('cluster');

for(i=0; i<DTFProgress.length; i++){
    cluster.innerHTML +=
`
<tr>
    <td><img src="SVG/${DTFProgress[i][2]}.svg" width="100px"></td>
    <td>${DTFProgress[i][0]} <br>${DTFProgress[i][1]}</td>
    <td><progress max="${DTFProgress[i][4]}" value="${DTFProgress[i][3]}"></progress></td>
    <td class="a">${DTFProgress[i][3]}/${DTFProgress[i][4]}</td>
</tr>
`
}