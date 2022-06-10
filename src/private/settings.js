import keyboards from '../keyboard/private.js'

export default (ctx) => {
    if(ctx.messagePayload?.command == "settings") {
        return ctx.send({
            message: `Настройки:`,
            keyboard: keyboards.settings_menu
        })
    }
}