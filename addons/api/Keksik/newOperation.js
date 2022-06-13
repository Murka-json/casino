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
    const data = await axios.post('https://api.keksik.io/donates/get-last', {
        group: config.group_id,
        token: config.keksikToken,
        v: Number(1)
    }).then((data) => {
        return data.data
    }).catch((err) => {
        return false
    })

    if(!data) return

    for(let i in data.list) {
        let id = data.list[i].id
        let uid = data.list[i].user
        let amount = data.list[i].amount

        let vkCoinAmount = Number(amount / db.bonus_buy_course * 1000000)

        if(db.historys.keksik[id]) return
        db.historys.keksik[id] = {
            id: id,
            uid: uid,
            amount: amount,
            vkCoinAmount: vkCoinAmount
        }

        if(!db.usersData[uid]) return

        db.usersData[uid].bbalance += Number(vkCoinAmount)

        await vk.api.messages.send({
            peer_id: uid,
            message: `✅ Спасибо за покупку! Мы начислили вам ${utils.number_format(vkCoinAmount)} VkCoin на бонусный баланс!`,
            random_id: utils.random(-2000000000, 2000000000)
        })

        for(let i in config.admins) {
            await vk.api.messages.send({
                peer_id: config.admins[i],
                message: `✅ [id${uid}|Пользователь] купил ${utils.number_format(vkCoinAmount)} VkCoin на сумму ${amount}р!`,
                random_id: utils.random(-2000000000, 2000000000)
            })
        }
    }
}, 65000);