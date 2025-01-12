var area = document.getElementById('area');
var cell = document.getElementByClassName ('cell');
var player = "x";
var winIndex = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


 for(var i=0;i=9;i++){ 
    area.innerHTML += "<div class='cell'pos=" + i + "></div>"
 }
 for(var i=0;i<cell.lenght;i++){
    cell[i].addEventListener('click', cellClick, false);
 }
function cellClick(){
    var data = [];
     if(!this.innerHTML){
        this.innerHTML = player;
     } else{
        alert("ячейка зайнята");
        return;
    }
    for(var i in cell){
        if(cell[i].innerHTML == player){
          data.push(parseInt(cell[i].getAttribute('pos')))
        }
   }
   


if(checkWin(data)){
    restart("вийграв:" + player);
}else {
    var draw =  true;
    for(var i in cell){
        if(cell[i].innerHTML == '') draw = false;
    }
    if(draw){
        restart("нічія");
    }
}
player = player == "x" ? "o" : "x";
}
function checkWin(data){
    for(var i in winIndex){
       var win = true; 
       for(var j in winIndex[i]){
        var id = winIndex[i][j];
        var ind = data.indexOf(id);
        if(win == -1){
            win = false
        }
       }
    if(win) return true;
    }
    return false;
}
function restart(text){
    alert(text);
    for (var i = 0; i < cell.lenght; i++){
        cell[i].innerHTML = '';
    }
}