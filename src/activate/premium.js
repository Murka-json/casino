import keyboard from "../keyboard/games.js"

export default (ctx, user, conv) => {
    if(ctx.isChat && ctx.messagePayload?.command == 'buy_premium') {
        if(user.balance < 25000000) return ctx.send({
            message: `Недостаточно средств`
        })

        conv.gameData.procent = 1
        conv.gameData.ownerId = ctx.senderId
        user.balance -= Number(25000000)

        return ctx.send({
            message: `Активирована Premium беседа (1% от каждой ставки)\nВыберите режим на лкавиатуре и приступайте к игре:`,
            keyboard: keyboard.new_game
        })
    }
}