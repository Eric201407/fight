input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, randint(-1, 1))
})
input.onButtonPressed(Button.AB, function () {
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.Y, randint(-1, 1))
})
let player: game.LedSprite = null
game.setScore(0)
player = game.createSprite(2, 2)
let enemy = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (player.isTouching(enemy)) {
        game.addScore(1)
        enemy.delete()
        enemy = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
