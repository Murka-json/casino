import db from '../../../db/db.json'
import config from '../../../config.js'
import utils from '../../../addons/utils.js'

import { VK } from 'vk-io'
import md5 from 'md5'

const vk = new VK({
    token: config.group_token,
    pollingGroupId: config.group_id
})

let evenNumbers = [2, 4, 6]
let noEvenNumbers = [1, 3, 5]

let int1Number = [1]
let int2Number = [2]
let int3Number = [3]
let int4Number = [4]
let int5Number = [5]
let int6Number = [6]

export default setInterval(async () => {
    for(let i in db.convsData) {
        if(db.convsData[i].gameData.game == 'dice' && db.convsData[i].gameData.amount >= 1) {
            db.convsData[i].gameData.timer -= Number(1)

            if(db.convsData[i].gameData.timer <= 0) {
                let evenType = null
                if(evenNumbers.includes(db.convsData[i].gameData.resultData.result)) evenType = 'чётное'
                if(noEvenNumbers.includes(db.convsData[i].gameData.resultData.result)) evenType = 'нечётное'
                
                let str = `Выпало число ${db.convsData[i].gameData.resultData.result}, ${evenType}\n\n`

                for(let j in db.convsData[i].gameData.bets) {
                    if(db.convsData[i].gameData.bets[j].even > 0) {
                        if(evenNumbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].even)} VkCoin на чётное выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].even * 2)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].even * 2)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].even * 2 - db.convsData[i].gameData.bets[j].even)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].even * 2 - db.convsData[i].gameData.bets[j].even)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].noEven > 0) {
                        if(noEvenNumbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].noEven)} VkCoin на нечётное выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].noEven * 2)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].noEven * 2)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].noEven * 2 - db.convsData[i].gameData.bets[j].noEven)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].noEven * 2 - db.convsData[i].gameData.bets[j].noEven)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int1 > 0) {
                        if(int1Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int1)} VkCoin на число 1 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int1 * 6)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int1 * 6)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int1 * 6 - db.convsData[i].gameData.bets[j].int1)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int1 * 6 - db.convsData[i].gameData.bets[j].int1)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int2 > 0) {
                        if(int2Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int2)} VkCoin на число 2 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int2 * 6)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int2 * 6)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int2 * 6 - db.convsData[i].gameData.bets[j].int2)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int2 * 6 - db.convsData[i].gameData.bets[j].int2)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int3 > 0) {
                        if(int3Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int3)} VkCoin на число 3 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int3 * 6)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int3 * 6)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int3 * 6 - db.convsData[i].gameData.bets[j].int3)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int3 * 6 - db.convsData[i].gameData.bets[j].int3)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int4 > 0) {
                        if(int4Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int4)} VkCoin на число 4 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int4 * 6)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int4 * 6)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int4 * 6 - db.convsData[i].gameData.bets[j].int4)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int4 * 6 - db.convsData[i].gameData.bets[j].int4)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int5 > 0) {
                        if(int5Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int5)} VkCoin на число 5 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int5 * 6)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int5 * 6)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int5 * 6 - db.convsData[i].gameData.bets[j].int5)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int5 * 6 - db.convsData[i].gameData.bets[j].int5)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int6 > 0) {
                        if(int6Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int6)} VkCoin на число 6 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int6 * 6)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int6 * 6)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int6 * 6 - db.convsData[i].gameData.bets[j].int6)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int6 * 6 - db.convsData[i].gameData.bets[j].int6)
                        }
                    }
                }

                for(let j in db.convsData[i].gameData.bets) {
                    if(db.convsData[i].gameData.bets[j].even > 0) {
                        if(!evenNumbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].even)} VkCoin на чётное проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].noEven > 0) {
                        if(!noEvenNumbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].noEven)} VkCoin на нечётное проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int1 > 0) {
                        if(!int1Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int1)} VkCoin на число 1 проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int2 > 0) {
                        if(!int2Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int2)} VkCoin на число 2 проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int3 > 0) {
                        if(!int3Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int3)} VkCoin на число 3 проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int4 > 0) {
                        if(!int4Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int4)} VkCoin на число 4 проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int5 > 0) {
                        if(!int5Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int5)} VkCoin на число 5 проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int6 > 0) {
                        if(!int6Number.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int6)} VkCoin на число 6 проиграла\n`
                        }
                    }
                }

                str += `\n\nХеш игры: ${db.convsData[i].gameData.resultData.hash}\nПроверка честности: ${db.convsData[i].gameData.resultData.secret}@${db.convsData[i].gameData.resultData.result}`

                let sendId = db.convsData[i].id

                vk.api.messages.send({
                    peer_id: sendId,
                    message: `Итак, результаты раунда...`,
                    random_id: utils.random(-200000000, 20000000000)
                })

                vk.upload.messagePhoto({
                    source: {
                        value: `./pictures/dice/${db.convsData[i].gameData.resultData.result}.jpg`
                    }
                }).then((attachment) => {
                    vk.api.messages.send({
                        peer_id: sendId,
                        message: str,
                        attachment,
                        random_id: utils.random(-200000000, 20000000000)
                    }).catch((err) => { console.log(err) })
                }).catch((err) => { console.log(err) })

                let secret = utils.randomStr(20)
                let result = utils.random(1, 6)
                let hash = md5(secret + '@' + result)

                db.convsData[i].gameData.resultData.result = result
                db.convsData[i].gameData.resultData.secret = secret
                db.convsData[i].gameData.resultData.hash = hash

                db.convsData[i].gameData.timer = Number(db.convsData[i].gameData.newTimer)
                db.convsData[i].gameData.bets = {}
                db.convsData[i].gameData.amount = 0
            }
        }
    }
}, 1000)