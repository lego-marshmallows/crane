function goback () {
    motors.largeBC.steer(-20, 50, -1400, MoveUnit.Degrees)
}
function turnandrelease () {
    motors.mediumA.run(20, 60, MoveUnit.Degrees)
    pause(200)
}
function goToTheCrane () {
    motors.largeBC.steer(-12, 50, 1720, MoveUnit.Degrees)
    motors.largeBC.run(-10, 150, MoveUnit.Degrees)
}
goToTheCrane()
turnandrelease()
goback()
brick.exitProgram()
