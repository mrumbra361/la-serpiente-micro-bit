radio.onReceivedNumber(function (receivedNumber) {
    vibora[2].turn(Direction.Right, 45)
})
input.onButtonPressed(Button.A, function () {
    vibora[2].turn(Direction.Left, 45)
})
let siguiente: game.LedSprite = null
let vibora: game.LedSprite[] = []
radio.setGroup(1)
vibora = [game.createSprite(0, 2), game.createSprite(1, 2), game.createSprite(2, 2)]
let comida = game.createSprite(randint(0, 4), randint(0, 4))
let pausa = 1000
let paso = 75
let mini_pausa = 250
game.setScore(0)
basic.forever(function () {
    for (let index = 0; index <= 2; index++) {
        vibora[index].move(1)
    }
    if (vibora[2].isTouching(comida)) {
        game.addScore(1)
        comida.delete()
        comida = game.createSprite(randint(0, 4), randint(0, 4))
        if (pausa > mini_pausa) {
            pausa = pausa - paso
        }
    }
    if (vibora[2].isTouching(vibora[1])) {
        basic.showNumber(game.score())
        game.gameOver()
    }
    for (let index = 0; index <= 1; index++) {
        siguiente = vibora[index + 1]
        vibora[index].set(LedSpriteProperty.Direction, siguiente.get(LedSpriteProperty.X))
    }
    basic.pause(pausa)
})
