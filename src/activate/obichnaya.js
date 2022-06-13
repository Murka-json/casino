import keyboard from "../keyboard/games.js"

export default (ctx, user, conv) => {
    if(ctx.isChat && ctx.messagePayload?.command == 'buy_obichnaya') {
        if(user.balance < 10000000) return ctx.send({
            message: `Недостаточно средств`
        })

        conv.gameData.procent = 0.5
        conv.gameData.ownerId = ctx.senderId
        user.balance -= Number(10000000)

        return ctx.send({
            message: `Активирована Обычная беседа (0.5% от каждой ставки)\nВыберите режим на лкавиатуре и приступайте к игре:`,
            keyboard: keyboard.new_game
        })
    }
}