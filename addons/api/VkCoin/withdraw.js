import axios from 'axios'
import config from '../../../config.js'

const getBalance = async () => {
    const data = await axios.post('https://coin-without-bugs.vkforms.ru/merchant/score/', {
        merchantId: config.vkc_id_user,
        key: config.vkc_key,
        userIds: [config.vkc_id_user]
    }).then((data) => {
        return Math.floor(Number(data.data.response[config.vkc_id_user]))
    }).catch((err) => {
        return false
    })
    return data
}

const newTransfer = async (to, amount) => {
    const data = await axios.post('https://coin-without-bugs.vkforms.ru/merchant/send/', {
        merchantId: config.vkc_id_user,
        key: config.vkc_key,
        toId: to,
        amount: Number(amount * 1000)
    }).then((data) => {
        return true
    }).catch((err) => {
        return false
    })
    return data
}

import utils from "../../utils.js"

export default (ctx, user) => {
    if(ctx.messagePayload?.command == 'output') {
        if(user.balance < 1) return ctx.send(`[id${user.id}|${user.name}], на вашем балансе нет VkCoin`)
        if(getBalance() > user.balance) return ctx.send(`[id${user.id}|${user.name}], на балансе бота недостаточно средств...`)

        let saveBal = user.balance 
        user.balance = 0

        newTransfer(user.id, saveBal)
        return ctx.send(`🚀 [id${user.id}|${user.name}], Выведено ${utils.number_format(saveBal)} VkCoin`)
    }
}