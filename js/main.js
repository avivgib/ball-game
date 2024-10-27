'use strict'

function onBallClick(elBall) {
    const newSize = elBall.clientWidth >= 400 ? 100 : elBall.clientWidth + 50  
    elBall.style.width = elBall.style.height = `${newSize}px`
    elBall.innerHTML = newSize
}