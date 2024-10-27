'use strict'

function onBallClick(elBall) {
    const randomIncrementSize = getRandomInt(20, 61)
    const newSize = (elBall.clientWidth + randomIncrementSize) >= 400 ? 100 : (elBall.clientWidth + randomIncrementSize)  
    elBall.style.width = elBall.style.height = `${newSize}px`
    elBall.innerHTML = newSize
    
    const newColor = getRandomColor()
    elBall.style.backgroundColor = `#${newColor}`
}