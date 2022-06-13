import utils from "../../addons/utils.js"
import games from "../keyboard/games.js"

export default (ctx, conv) => {
    if(ctx.isChat && ctx.text.toLowerCase() === '/stats') {
        return ctx.send({
            message: `📊 Статистика беседы за сегодня

💳 Прибыль владельца: ${utils.number_format(conv.gameData.procentAmount.day)} VkCoin`,
            keyboard: games.stats
        })
    }
    if(ctx.isChat && ctx.messagePayload?.command == 'stats') {
        if(ctx.messagePayload?.action == 'day') return ctx.send({
            message: `📊 Статистика беседы за сегодня

💳 Прибыль владельца: ${utils.number_format(conv.gameData.procentAmount.day)} VkCoin`,
            keyboard: games.stats
        })
        if(ctx.messagePayload?.action == 'week') return ctx.send({
            message: `📊 Статистика беседы за неделю

💳 Прибыль владельца: ${utils.number_format(conv.gameData.procentAmount.week)} VkCoin`,
            keyboard: games.stats
        })
        if(ctx.messagePayload?.action == 'all') return ctx.send({
            message: `📊 Статистика беседы за всё время

💳 Прибыль владельца: ${utils.number_format(conv.gameData.procentAmount.all)} VkCoin`,
            keyboard: games.stats
        })
    }
}