let $board = $('.board');
let $boats = $('.boat');

let player1 = {
    name: "Player 1",
    score: 0,
    boatsPlayed: 0,
    boatImageName: "littleboat",
    boatClass: "boatOne"
};
let player2 = {
    name: "Player 2",
    score: 0,
    boatsPlayed: 0,
    boatImageName: "smallboat",
    boatClass: "boatTwo"
};

player1.boatImage = `<img src="images/${player1.boatImageName}.png" class="${player1.boatClass}" data-owner="${player1.name}">`
player2.boatImage = `<img src="images/${player2.boatImageName}.png" class="${player2.boatClass}" data-owner="${player2.name}">`

let currentPlayer = player1

// Switches players turns during boat setup
function switchBoatSetupTurns() {
    $(`.${currentPlayer.boatClass}`).fadeOut(500)
    if(currentPlayer === player1) {
        currentPlayer = player2
        $turn.text(`Turn: ${currentPlayer.name}`)
        // This line gives the images time to disappear BEFORE the alert can interupt.
        setTimeout(function() {
            alert('Player 2 set your boats!');
        }, 500);
    } else {
        // Remove event listener for setting up boats
        $boxes.off()
        // start game
        setTimeout(function() {
            alert("BEGIN!");
        }, 500);
        currentPlayer = player1
        $turn.text(`Turn: ${currentPlayer.name}`)
        // Activate game clicks
        boatHit();
    }
}

// Switches player turns during actual battle
function switchAttackingTurns() {
    if(currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}

// For loop to create the 64 box playing grid
for(i = 0; i <= 63; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    $board.hide().append(box)
}

const maxShips = 3
let $boxes = $('.box')
let $turn = $('#turn')
let $pointsPlayerOne = $('.points-playerOne')
let $pointsPlayerTwo = $('.points-playerTwo')

// Shows boat when boat is clicked
function boatHit() {
    $boxes.on( "click", function( event ) {
        event.preventDefault();
        var $imgWithin = $(this).find('img')
        // if img within has data-owner belonging to other player, increase currentPlayer.score
        if($imgWithin.length && $imgWithin.attr('data-owner') !== currentPlayer.name) {
            currentPlayer.score ++
            switchAttackingTurns();
            $turn.text(`Turn: ${currentPlayer.name}`)
            alert('Nice hit!!')
        // if img within has data-owner belonging to currentPlayer, ??decrease currentPlayer.score?? & switch turn
        } else if($imgWithin.attr('data-owner') === currentPlayer.name) {
            // currentPlayer.score --
            switchAttackingTurns();
            $turn.text(`Turn: ${currentPlayer.name}`)
            alert('That is your own ship!')
        // if no img alert miss and switch turn
        } else {
            switchAttackingTurns();
            $turn.text(`Turn: ${currentPlayer.name}`)
            alert('Miss!')
        }
        $imgWithin.show(500);
        $pointsPlayerOne.text(`Player 1: ${player1.score}`);
        $pointsPlayerTwo.text(`Player 2: ${player2.score}`);
    });
    matchWinner();
}
 // // Shows grid when clicking start
let $startBtn = $('.start');
$startBtn.on('click', function() {
    $board.show(500);
    setTimeout(function() {
        alert('Player 1 set your boats!');
    }, 501);
    $(this).off();
    boatSettingHandler();
})

// Adds boats to grid when clicking boxes; Switches to next player after 3 boats are placed.
let boatSettingHandler = function() {
    $boxes.one('click', function() {
        $(this).prepend(currentPlayer.boatImage)
        currentPlayer.boatsPlayed ++
        if(currentPlayer.boatsPlayed >= maxShips) {
            switchBoatSetupTurns();
        }
    })
}

function matchWinner() {
    if(currentPlayer.score === 3) {
        alert(`${currentPlayer.name} IS VICTORIOUS!`)
    }
}
// boatSettingHandler();