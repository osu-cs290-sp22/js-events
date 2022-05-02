window.addEventListener('click', function () {
    console.log("== The window was clicked")
})

function boxClickListener(event) {
    console.log("== A box was clicked")
    console.log("  - event.target:", event.target)
    console.log("  - event.currentTarget:", event.currentTarget)
}

var boxes = document.getElementsByClassName('box')
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClickListener)
}

function buttonClickListener(event) {
    console.log("== A button was clicked")
    console.log("  - event.target:", event.target)
    var box = event.currentTarget.parentNode
    box.classList.toggle('highlighted')
}

var buttons = document.getElementsByClassName('in-box-button')
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClickListener)
}
