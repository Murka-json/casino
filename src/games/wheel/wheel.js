import keyboard from "../../keyboard/games.js"
import utils from "../../../addons/utils.js"
import md5 from "md5"


export default (ctx, conv) => {
    if(ctx.isChat && ctx.messagePayload?.command == 'game_wheel') {
        conv.gameData.game = 'wheel'
        let number = utils.random(0, 36)
        let randStr = utils.randomStr(20)
        let hash = md5(`${randStr}@${number}`)
        conv.gameData.resultData.result = number
        conv.gameData.resultData.sol = randStr
        conv.gameData.resultData.hash = hash

        return ctx.send({
            message: `Режим Wheel успешно включен!`,
            keyboard: keyboard.wheel
        })
    }
}