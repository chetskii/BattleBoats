let $board = $('.board');
let $currentShip = null;

// For loop to create the 64 box playing grid
for(i = 0; i <= 63; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    $board.append(box)
}

let shipsLeft = 6;
let $boxes = $('.box')
let $turn = $('#turn')
// Places ship in box clicked.
let clickBoxHandler = function() {
    $boxes.one('click', function() {
        $(this).prepend($('<img>',{class:'boat', src:'images/littleboat.png'}))
        shipsLeft--;
        console.log(shipsLeft)
        var $boats = $('.boat')
        if(shipsLeft === 3) {
            $boats.hide(1000)
            turnHandler();
        } else {
            if(shipsLeft === 0) {
                alert('FIGHT!')
                console.log($boats.length)
                $boats.hide(600)
                startGame();
            }
        }
    })
    
}
clickBoxHandler();
// Controls player turns
function turnHandler() {
    alert(`Player 2's turn`)
    $turn.text('Turn: Player 2')
    console.log($turn)
}

// let $boats = $("<img>id='boat', src='images/littleboat.png'</img>");
// function startGame() {
//     $board.css('opacity', '$boats', '0');
// }

$startNew = $('#new-game');

$startNew.on('click', function() {
    $boxes.html("");
    shipsLeft = 6;
    $turn.text('Turn: Player 1')
})

// Maybe place 2 images in html file & when 
// shipsLeft reaches 0 switch to the next image(I could also change
// text for whose turn at this point)?