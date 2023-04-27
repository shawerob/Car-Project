radio.onReceivedNumber(function (receivedNumber) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    255,
    SuperBit.enMotors.M4,
    255
    )
})
radio.onReceivedString(function (receivedString) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    -255,
    SuperBit.enMotors.M4,
    -255
    )
})
radio.onReceivedValue(function (name, value) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    0,
    SuperBit.enMotors.M4,
    0
    )
})
radio.setGroup(200)
