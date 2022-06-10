import keyboard from "../../keyboard/games.js"

export default (ctx, conv) => {
    if(ctx.isChat && ctx.messagePayload?.command == 'game_wheel') {
        conv.gameData.game = 'wheel'

        return ctx.send({
            message: `Режим Wheel успешно включен!`,
            keyboard: keyboard.wheel
        })
    }
}