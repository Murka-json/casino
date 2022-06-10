import utils from "../../../addons/utils.js"

export default (ctx, user) => {
    if(ctx.isChat && ctx.messagePayload?.command == 'balance') {
        return ctx.send({
            message: `[id${user.id}|${user.name}], ваш баланс ${utils.number_format(user.balance)} VkCoin${user.bbalance > 0 ? `\nБонусный баланс ${utils.number_format(user.bbalance)} VkCoin` : `` }`
        })
    }
}