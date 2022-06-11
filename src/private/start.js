import keyboards from '../keyboard/private.js'
import config from '../../config.js'

export default (ctx) => {
    if(ctx.text.toLowerCase() === 'начать' || ctx.messagePayload?.command == 'back') {
        return ctx.send({
            message: `Главное меню`,
            keyboard: keyboards.menu_keyboard
        })
    }
}