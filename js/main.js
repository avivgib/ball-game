'use strict'

function onBallClick(elBall) {
    let currentWidth = elBall.clientWidth
    let newWidth = currentWidth + 50

    elBall.style.width = newWidth + 'px'
    elBall.style.height = newWidth + 'px'
    elBall.innerHTML = newWidth
}