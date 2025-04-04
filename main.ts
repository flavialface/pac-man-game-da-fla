input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("C5 B A F G F F B ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . # . .
            # . . . .
            . # . . .
            `)
        basic.showLeds(`
            . # # . .
            # # . . .
            # . # . .
            # # . . .
            . # # . .
            `)
        basic.showLeds(`
            . # # . .
            # # . # .
            # # # # .
            # # # # .
            . # # . .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            # # # # #
            # . # . #
            `)
        basic.showLeds(`
            . . # # #
            . # . # .
            . # # # #
            . # # # #
            . # . # .
            `)
        basic.showLeds(`
            . . . # #
            . . # . #
            . . # # #
            . . # # #
            . . # . #
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . . # #
            . . . # #
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
