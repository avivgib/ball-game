'use strict'

function onBallClick(elBall, maxDiameter) {
    const randomIncrementSize = getRandomInt(20, 61)

    const currentSize = elBall.clientWidth
    const incrementedSize = currentSize + randomIncrementSize
 
    const newSize = incrementedSize >= maxDiameter ? 100 : incrementedSize
    elBall.style.width = elBall.style.height = `${newSize}px`
    elBall.innerHTML = newSize

    const newColor = getRandomColor()
    elBall.style.backgroundColor = `#${newColor}`
}