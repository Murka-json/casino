export default async (ctx, conv) => {
    if(ctx.isChat && ctx.text.toLowerCase() === '/timer') {
        if(ctx.senderId != conv.gameData.ownerId) return
        const newTimer = await ctx.question(`Введите новый таймер (от 1 сек. до 120 сек.)`)

        if(isNaN(newTimer.text)) return

        if(newTimer.text < 1 || newTimer.text > 120) return

        conv.gameData.newTimer = Number(newTimer.text)

        return ctx.send(`Установлен новый таймер в ${newTimer.text} сек.`)
    }
}