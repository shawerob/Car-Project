radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M2,
        255,
        SuperBit.enMotors.M4,
        255
        )
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (2 == receivedNumber) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M2,
        -255,
        SuperBit.enMotors.M4,
        -255
        )
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M2,
        0,
        SuperBit.enMotors.M4,
        0
        )
        basic.showLeds(`
            # . # . #
            . . # . .
            # # . # #
            . . # . .
            # . # . #
            `)
    }
})
radio.setGroup(200)
basic.showLeds(`
    # . . . .
    . # . . .
    . . # . #
    . . . # .
    . . # . #
    `)
