radio.onReceivedNumber(function (receivedNumber) {
    state = receivedNumber
})
let movement = 0
let state = 0
let GREENLIGHT = 1
let REDLIGHT = 2
let Distance = 10
let Speed = 1.5
radio.setGroup(1)
basic.forever(function () {
    if (state == GREENLIGHT) {
        basic.showIcon(IconNames.Yes)
    } else if (state == REDLIGHT) {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (Distance >= 0) {
        if (state == REDLIGHT) {
            movement = Math.abs(input.acceleration(Dimension.Strength) - 1000)
            if (movement > 100) {
                game.gameOver()
            }
        } else if (state == GREENLIGHT) {
            Distance += Distance - Speed
            basic.pause(500)
        }
    } else {
        basic.showString("You Win!")
    }
})
