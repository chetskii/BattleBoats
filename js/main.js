let $board = $('.board');
let $currentShip = null;
let $boats;

// For loop to create the 64 box playing grid
for(i = 0; i <= 63; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    $board.hide().append(box)
}

// Shows grid when clicking start
let $startBtn = $('.start');
$startBtn.on('click', function() {
    $board.show(500);
    setTimeout(function() {
        alert('Player 1 set your boats!');
    }, 600);
    $(this).off();
})

let shipsLeft = 6;
let $boxes = $('.box')
let $turn = $('#turn')

// Places ship in box clicked.
let clickBoxHandler = function() {
    $boxes.on('click', function() {
        $(this).prepend($('<img>',{class:'boat', src:'images/littleboat.png'}))
        shipsLeft--;
        $boats = $('.boat')
        if(shipsLeft === 3) {
            $boats.hide(1000)
        } else {
            if(shipsLeft === 0) {
                $boats.hide(600)
                $boxes.off('click')
                $turn.text('Turn: Player 1')
            }
        }
        $(this).off('click')
    })
}
clickBoxHandler();

// Clears board to begin a new game when clicking "New Game Button"
$startNew = $('#new-game');
$startNew.on('click', function() {
    $boxes.html("");
    clickBoxHandler();
    shipsLeft = 6;
    $turn.text('Turn: Player 1')
})

// Shows boat when boat is clicked
function boatHit() {
    $boxes.on( "click", function( event ) {
        event.preventDefault();
        $(this).find('img').show(500);
        console.log("Image Hit!")
    });
}

//* function startGame() {
//     let $startButton = $('#start')
//     $startButton.on('click', function() {
//         alert('FIGHT!')
//     })
// }

//* Controls player turns
// function turnHandler() {
//     $(this).on('click', function() {
//         if($turn.text() === 'Turn: Player 1') {
//             $turn.text('Turn: Player 2')
//         } else {
//             $turn.text('Turn: Player 1')
//         }
//     })
// };

// Maybe place 2 images in html file & when 
// shipsLeft reaches 0 switch to the next image(I could also change
// text for whose turn at this point)?