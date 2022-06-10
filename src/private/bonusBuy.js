import db from '../../db/db.json'
import config from '../../config.js'

export default async (ctx, vk) => {
    if(ctx.messagePayload?.command == "bonus_buy") {
        let keksikPayLink = await vk.api.utils.getShortLink({ url: `https://vk.com/app6887721_-${config.group_id}#donate_null` })
        return ctx.send({
            message: `🔥 Курс бонусных коинов: ${db.bonus_buy_course} ₽ за 1 000 000 VkCoin

🚀 Ссылка на оплату в кексике:
${keksikPayLink.short_url}`
        })
    }
}