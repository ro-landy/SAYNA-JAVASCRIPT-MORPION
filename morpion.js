
var grid = ['item1' ,'item2', 'item3' ,'item4' ,'item5' ,'item6' ,'item7' ,'item8' ,'item9'];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var arr5 = [];
var arr6 = [];
var arr7 = [];
var arr8 = [];
var success;
var gameOver = false;
var arr = [];
var clicked = 0;
var choice = 9;
var playerScore = 0;
var cpuScore = 0;
var player = {
    name : 'player1',
    team : '',
    arr : []
};
var cpu = {
    name : 'computer',
    team : '',
    arr : []
};

$('.cpu-score').html(cpuScore);
$('.you-score').html(playerScore);

function test(){
    console.log("This is a test")
    alert("This is a test")
}

function findElement(check){
    arr1 = ['item1' , 'item2' , 'item3'];
    arr2 = ['item4' , 'item5' , 'item6'];
    arr3 = ['item7' , 'item8' , 'item9'];
    arr4 = ['item1' , 'item4' , 'item7'];
    arr5 = ['item2' , 'item5' , 'item8'];
    arr6 = ['item3' , 'item6' , 'item9'];
    arr7 = ['item1' , 'item5' , 'item9'];
    arr8 = ['item3' , 'item5' , 'item7'];

    success;

    switch(true){
        case success = arr1.every(function(val){
        return check.arr.indexOf(val) !== -1;
        }):

        gameOver = true;
        winning(arr1);
        setTimeout(on ,700,check.name);
        break;
 
        case success = arr2.every(function(val){
        return check.arr.indexOf(val) !== -1;
        }):
    
        gameOver = true;
        winning(arr2);
        setTimeout(on ,700,check.name);
        break;

        case success = arr3.every(function(val){
        return check.arr.indexOf(val) !== -1;
        }):
    
        gameOver = true;
        winning(arr3);
        setTimeout(on ,700,check.name);
        break;

        case success = arr4.every(function(val){
        return check.arr.indexOf(val) !== -1;
        }):
        
        gameOver = true;
        winning(arr4);
        setTimeout(on ,700,check.name);
        break;

        case success = arr5.every(function(val){
        return check.arr.indexOf(val) !== -1;
        }):
    
        gameOver = true;
        winning(arr5);
        setTimeout(on ,700,check.name);
        break;
     
        case success = arr6.every(function(val){
        return check.arr.indexOf(val) !== -1;
        }):
        
        gameOver = true;
        winning(arr6);
        setTimeout(on ,700,check.name);
        break;
    
        case success = arr7.every(function(val){
        return check.arr.indexOf(val) !== -1;
        }):
        
        gameOver = true;
        winning(arr7);
        setTimeout(on ,700,check.name);
        break;
    
        case success = arr8.every(function(val){
        return check.arr.indexOf(val) !== -1;
        }):
            
        gameOver = true;
        winning(arr8);
        setTimeout(on ,700,check.name);
        break;
        
    }
}

function choiseCase(clicked_id){
    if (clicked % 2 == 0) {
        $('#' + clicked_id.toString()).html(player.team);
        grid.splice(grid.indexOf(clicked_id), 1);
        player.arr.push(clicked_id);
        findElement(player);
        finished();
        $('.player-turn').css({"border-bottom": "none"});
        $('.cpu.turn').css({"border-bottom" : "3px solid #e29126"});
        $('#' + clicked_id.toString()).prop("disabled" ,true);
        setTimeout(computer ,1300);
        console.log(clicked_id)
    }

        choice = 1;
        clicked++;
}

function computer(){

    var ran = Math.floor(Math.random() * choice);
    var res = grid[ran];
    // $('#' + clicked_id.toString()).html(cpu.team);
    cpu.arr.push(grid[ran]);
    grid.splice(grid.indexOf(res), 1);
    findElement(cpu);
    finished();
    $('#' + res.toString()).prop("disabled", true);
    $('.cpu.turn').css({"border-bottom" : "none"});
    $('.player-turn').css({"border-bottom": "3px solid #4284f6"});

    choice = 1;
    clicked++;
}


function reset(){
    
    $(".grid-item").empty();
    player.arr = [];
    cpu.arr = [];
    grid =  ['item1' ,'item2', 'item3' ,'item4' ,'item5' ,'item6' ,'item7' ,'item8' ,'item9'];
    choice = 9;
    gameOver = false;
    playerScore = 0;
    cpuScore = 0;
    $('.cpu-score').html(cpuScore);
    $('.you-score').html(playerScore);
}

function winning(valeur){
    // if (clicked % 2 == 0) {
    //     $('#' + valeur[0] + ', #' + valeur[1] + ', #' + valeur[2]).html(<p class="animated bounceIn" style="font-size:2em;color:#3fcc64">+player.team</p>);
    //     playerScore++;
    //     $('.you-score').html(playerScore);
    // }else{
    //     $('#' + valeur[0] + ', #' + valeur[1] + ', #' + valeur[2]).html(<p class="animated bounceIn" style="font-size:2em;color:#3fcc64">+cpu.team</p>);
    //     cpuScore++;
    //     $('.cpuScore').html(cpuScore);
    // }
    grid = [];
}

function teamchoice(clicked_id){
    $(".layer").removeClass('animated');
    $(".layer").fadeOut(400);
    player.team = document.getElementById(clicked_id).innerHTML
    console.log(player.team)
        if (player.team == 'X') {
            cpu.team = 'O';
        }else{
            cpu.team = 'X';
        }
}

function winnershow(){
    $(".layer2").removeClass('animated');
    $(".layer2").fadeOut(400);
    $(".grid-item").empty();
    player.arr= [];
    cpu.arr = [];
    grid =  ['item1' ,'item2', 'item3' ,'item4' ,'item5' ,'item6' ,'item7' ,'item8' ,'item9'];
    choice = 9;
    gameOver = false;

}

function matchnul(){
    $(".layer3").removeClass('animated');
    $(".layer3").fadeOut(400);
    player.arr= [];
    cpu.arr = [];
    grid =  ['item1' ,'item2', 'item3' ,'item4' ,'item5' ,'item6' ,'item7' ,'item8' ,'item9'];
    choice = 9;
    gameOver = false;
}

function on(val){
    $(".layer2").show();
    $(".winner-name").html(val + 'you Win');
}

function on3(){
    $(".layer3").removeClass('animated');
    $(".layer3").show();

}

function finished(){
    if(choice == 0 && gameOver == false){
        on3;
    }
}

(function() {

    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    function choiseCase(id) {

    }

    // Vide le contenu de toute les cases
    function reset() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
    }

})();