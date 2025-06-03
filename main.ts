input.onButtonPressed(Button.A, function () {
    basic.showString("Has apretat W")
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
