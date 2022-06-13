import axios from 'axios'
import { VK } from 'vk-io'

import config from '../../../config.js'
import db from '../../../db/db.json'
import utils from '../../../addons/utils.js'

const vk = new VK({
    token: config.group_token,
    pollingGroupId: config.group_id
})

export default setInterval(async () => {
    const data = await axios.post('https://coin-without-bugs.vkforms.ru/merchant/tx/', {
        merchantId: config.vkc_id_user,
        key: config.vkc_key,
        tx: [1]
    }).then((data) => {
        return data.data
    }).catch((err) => {
        return false
    })

    if(!data) return

    for(let i in data.response) {
        let id = data.response[i].id
        let uid = data.response[i].from_id
        let amount = Number(data.response[i].amount / 1000)

        if(db.historys.vkcoin[id]) return
        db.historys.vkcoin[id] = {
            id: id,
            uid: uid,
            amount: amount
        }

        if(!db.usersData[uid]) return

        if(amount < 1) return

        db.usersData[uid].balance += Math.round(amount)
        db.vkcPay += Number(1)

        await vk.api.messages.send({
            peer_id: uid,
            message: `💳 Пополнение на ${utils.number_format(amount)} VkCoin\n⚙ Номер платежа: ${db.vkcPay}`,
            random_id: utils.random(-2000000000, 2000000000)
        })

        for(let i in config.admins) {
            await vk.api.messages.send({
                peer_id: config.admins[i],
                message: `💳 Пополнение [id${uid}|пользователя] на ${utils.number_format(amount)} VkCoin\n⚙ Номер платежа: ${db.vkcPay}`,
                random_id: utils.random(-2000000000, 2000000000)
            })
        }
    }
}, 5000)