let $board = $('.board');
let $currentShip = null;

// For loop to create the 64 box playing grid
for(i = 0; i <= 63; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    $board.append(box)
}

// Need to set battleships to appear on click
let $boxes = $('.box')

$boxes.on('click', function() {
    $(this).prepend($('<img>',{id:'boat', src:'images/littleboat.png'}))
})

// let setShips = function() {
//     $boxes.on('click')
// }