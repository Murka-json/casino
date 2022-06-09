import keyboards from '../keyboard/private.js'
import config from '../../config.js'

export default (ctx) => {
    if(ctx.text === "Начать" || ctx.text === "начать") {
        ctx.send({
            message: `Добро пожаловать в ${config.project_name}`,
            keyboard: keyboards.menu_keyboard
        })
    }
}