export default (ctx, conv) => {
    if(ctx.isChat && ctx.messagePayload?.command == 'bank' && conv.gameData.game == 'wheel') {
        if(conv.gameData.amount < 1) return ctx.send({
            message: `В этом раунде ещё никто не поставил.\n\nХеш игры: ${conv.gameData.resultData.hash}`
        })
    }
}