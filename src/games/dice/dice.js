import keyboard from "../../keyboard/games.js"
import utils from "../../../addons/utils.js"
import md5 from "md5"


export default (ctx, conv) => {
    if(ctx.isChat && ctx.messagePayload?.command == 'game_dice' || ctx.text.toLowerCase() === '/dice') {
        if(ctx.senderId != conv.gameData.ownerId) return
        if(conv.gameData.timer != conv.gameData.newTimer) return ctx.send(`Дождитесь конца раунда!`)
        conv.gameData.game = 'dice'
        let number = utils.random(1, 6)
        let randStr = utils.randomStr(20)
        let hash = md5(`${randStr}@${number}`)
        conv.gameData.resultData.result = number
        conv.gameData.resultData.secret = randStr
        conv.gameData.resultData.hash = hash

        return ctx.send({
            message: `Режим Dice успешно включен!`,
            keyboard: keyboard.dice
        })
    }
}