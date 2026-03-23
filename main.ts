basic.forever(function () {
    let degrees = 0
    if (degrees < 135 || degrees >= 315) {
        basic.showString("N")
    } else if (degrees < 45) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    }
})
