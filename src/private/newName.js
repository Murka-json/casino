import keyboards from '../keyboard/private.js'

export default (ctx, user) => {
    if(ctx.messagePayload?.command == "new_nick") {
        setTimeout(async function newName() {
            let name = await ctx.question(`Введите новый ник (Цена изменения: 5 000 000 VkCoin):`, { keyboard: keyboards.back_button })

            if(name.messagePayload) return ctx.send({
                message: `Вы вернулись в главное меню`,
                keyboard: keyboards.menu_keyboard
            })

            if(user.balance < 5000000) return ctx.send({
                message: `Недостаточно средств`,
                keyboard: keyboards.menu_keyboard
            })

            if(name.text.length < 3 || name.text.length > 16) {
                await ctx.send({
                    message: `Ник должен содержпть от 3-х до 16-ти символов`
                })
                return newName()
            }

            user.name = name.text
            return ctx.send({
                message: `Вы изменили ник на ${user.name}`,
                keyboard: keyboards.menu_keyboard
            })
        })
    }
}