let $board = $('.board');
let $currentShip = null;
let $boats;
let player1 = 3;
let player2 = 3;

// For loop to create the 64 box playing grid
for(i = 0; i <= 63; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    $board.hide().append(box)
}

let shipsLeftOne = 3;
let shipsLeftTwo = 3;
let $boxes = $('.box')
let $turn = $('#turn')

// Places ship in box clicked.


// Clears board to begin a new game when clicking "New Game Button"
$startNew = $('#new-game');
$startNew.on('click', function() {
    $boxes.html("");
    shipsLeft = 6;
    $turn.text('Turn: Player 1')
    clickBoxHandler();
})

// Shows boat when boat is clicked
// function boatHit() {
//     $boxes.on( "click", function( event ) {
//         event.preventDefault();
//         $(this).find('img').show(500);
//         console.log("Image Hit!")
//     });
// }

function startBattle() {
    $boats.hide();
}

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

 // // Shows grid when clicking start
let $startBtn = $('.start');
$startBtn.on('click', function() {
    $board.show(500);
    setTimeout(function() {
        alert('Player 1 set your boats!');
    }, 600);
    $(this).off();
})

// Maybe place 2 images in html file & when 
// shipsLeft reaches 0 switch to the next image(I could also change
// text for whose turn at this point)?

// let clickBoxHandler = function() {
//     $boxes.on('click', function() {
//         let currentPlayer = "Jesse"
//         let playerOneBoat = "images/littleboat.png"
//         let playerTwoBoat = "images/smallboat.png"
//         let image = `<img src=${playerOneBoat} class="boat" data-owner"playerOne">`
//         let image2 = `<img src=${playerTwoBoat} class="boat" data-owner"playerTwo">`
//         $boats = $('.boat')
//         // $(this).prepend($('<img>',{class:'boat', src:'images/littleboat.png'}))
//         if(shipsLeftOne !== 0) {
//             shipsLeftOne--;
//             $(this).prepend(image)
//             // $boats.hide(600)
//         } else if (shipsLeftOne === 0) {
//                 // shipsLeftTwo--;
//                 // $(this).prepend(image2)
//                 $(this).off('click')
//                 $boats.hide(600)
//         } else if (shipsLeftTwo === 0) {
//             console.log('hi')
//         }
//                 // boatHit();
//              // <----- End if else statement -----> //
        
//         $(this).off('click')
//     })
// }
// clickBoxHandler();

function clickBoxHandler() {
    let playerOneBoat = "images/littleboat.png";
    let playerTwoBoat = "images/smallboat.png";
    let littleBoat = `<img src=${playerOneBoat} class="boat" data-owner"playerOne">`;
    let smallBoat = `<img src=${playerTwoBoat} class="boat" data-owner"playerTwo">`;
    $boats = $('.boat');
    if(shipsLeftOne !== 0) {
        $boxes.on('click', function() {
            $(this).prepend(littleBoat);
            shipsLeftOne--;
        }) 
    }
}