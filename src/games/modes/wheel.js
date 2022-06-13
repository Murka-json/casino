import db from '../../../db/db.json'
import config from '../../../config.js'
import utils from '../../../addons/utils.js'

import { VK } from 'vk-io'
import md5 from 'md5'

const vk = new VK({
    token: config.group_token,
    pollingGroupId: config.group_id
})

let redNumbers = [1, 3, 5, 9, 7, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
let blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
    
let int112Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let int1324Numbers = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
let int2536Numbers = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

let int118Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
let int1936Numbers = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    
let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]
let noEvenNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]

export default setInterval(async () => {
    for(let i in db.convsData) {
        if(db.convsData[i].gameData.game == 'wheel' && db.convsData[i].gameData.amount >= 1) {
            db.convsData[i].gameData.timer -= Number(1)

            if(db.convsData[i].gameData.timer <= 0) {
                let colorType = null
                if(db.convsData[i].gameData.resultData.result == 0) colorType = 'зелёное'
                if(redNumbers.includes(db.convsData[i].gameData.resultData.result)) colorType = 'красное'
                if(blackNumbers.includes(db.convsData[i].gameData.resultData.result)) colorType = 'чёрное'
                
                let str = `Выпало число ${db.convsData[i].gameData.resultData.result}, ${colorType}\n\n`

                for(let j in db.convsData[i].gameData.bets) {
                    if(db.convsData[i].gameData.bets[j].red > 0) {
                        if(redNumbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].red)} VkCoin на красное выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].red * 2)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].red * 2)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].red * 2 - db.convsData[i].gameData.bets[j].red)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].red * 2 - db.convsData[i].gameData.bets[j].red)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].black > 0) {
                        if(blackNumbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].black)} VkCoin на чёрное выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].black * 2)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].black * 2)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].black * 2 - db.convsData[i].gameData.bets[j].black)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].black * 2 - db.convsData[i].gameData.bets[j].black)
                        }
                    }
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
                    if(db.convsData[i].gameData.bets[j].int118 > 0) {
                        if(int118Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int118)} VkCoin на 1-18 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int118 * 2)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int118 * 2)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int118 * 2 - db.convsData[i].gameData.bets[j].int118)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int118 * 2 - db.convsData[i].gameData.bets[j].int118)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int1936 > 0) {
                        if(int1936Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int1936)} VkCoin на 19-36 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int1936 * 2)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int1936 * 2)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int1936 * 2 - db.convsData[i].gameData.bets[j].int1936)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int1936 * 2 - db.convsData[i].gameData.bets[j].int1936)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int112 > 0) {
                        if(int112Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int112)} VkCoin на 1-12 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int112 * 3)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int112 * 3)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int112 * 3 - db.convsData[i].gameData.bets[j].int112)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int112 * 3 - db.convsData[i].gameData.bets[j].int112)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int1324 > 0) {
                        if(int1324Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int1324)} VkCoin на 13-24 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int1324 * 3)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int1324 * 3)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int1324 * 3 - db.convsData[i].gameData.bets[j].int1324)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int1324 * 3 - db.convsData[i].gameData.bets[j].int1324)
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int2536 > 0) {
                        if(int2536Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int2536)} VkCoin на 25-36 выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].int2536 * 3)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].int2536 * 3)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].int2536 * 3 - db.convsData[i].gameData.bets[j].int2536)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].int2536 * 3 - db.convsData[i].gameData.bets[j].int2536)
                        }
                    }
                    for(let d in db.convsData[i].gameData.bets[j].numbers) {
                        if(db.convsData[i].gameData.bets[j].numbers[d].number == db.convsData[i].gameData.resultData.result && db.convsData[i].gameData.bets[j].numbers[d].amount > 0) {
                            str += `✅ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].numbers[d].amount)} VkCoin на число ${db.convsData[i].gameData.bets[j].numbers[d].number} выйграла! (Приз ${utils.number_format(db.convsData[i].gameData.bets[j].numbers[d].amount * 36)} VkCoin)\n`
                            db.usersData[db.convsData[i].gameData.bets[j].id].balance += Math.floor(db.convsData[i].gameData.bets[j].numbers[d].amount * 36)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winDay += Math.floor(db.convsData[i].gameData.bets[j].numbers[d].amount * 36 - db.convsData[i].gameData.bets[j].numbers[d].amount)
                            db.usersData[db.convsData[i].gameData.bets[j].id].winWeek += Math.floor(db.convsData[i].gameData.bets[j].numbers[d].amount * 36 - db.convsData[i].gameData.bets[j].numbers[d].amount)
                        }
                    }
                }

                for(let j in db.convsData[i].gameData.bets) {
                    if(db.convsData[i].gameData.bets[j].red > 0) {
                        if(!redNumbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].red)} VkCoin на красное проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].black > 0) {
                        if(!blackNumbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].black)} VkCoin на чёрное проиграла\n`
                        }
                    }
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
                    if(db.convsData[i].gameData.bets[j].int118 > 0) {
                        if(!int118Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int118)} VkCoin на 1-18 проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int1936 > 0) {
                        if(!int1936Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int1936)} VkCoin на 19-36 проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int112 > 0) {
                        if(!int112Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int112)} VkCoin на 1-12 проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int1324 > 0) {
                        if(!int1324Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int1324)} VkCoin на 13-24 проиграла\n`
                        }
                    }
                    if(db.convsData[i].gameData.bets[j].int2536 > 0) {
                        if(!int2536Numbers.includes(db.convsData[i].gameData.resultData.result)) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].int2536)} VkCoin на 25-36 проиграла\n`
                        }
                    }
                    for(let d in db.convsData[i].gameData.bets[j].numbers) {
                        if(db.convsData[i].gameData.bets[j].numbers[d].number != db.convsData[i].gameData.resultData.result && db.convsData[i].gameData.bets[j].numbers[d].amount > 0) {
                            str += `❌ [id${db.convsData[i].gameData.bets[j].id}|${db.convsData[i].gameData.bets[j].name}] ставка ${utils.number_format(db.convsData[i].gameData.bets[j].numbers[d].amount)} VkCoin на число ${db.convsData[i].gameData.bets[j].numbers[d].number} проиграла\n`
                        }
                    }
                }

                str += `\n\nХеш игры: ${db.convsData[i].gameData.resultData.hash}\nПроверка честности: ${db.convsData[i].gameData.resultData.secret}@${db.convsData[i].gameData.resultData.result}`

                let sendId = db.convsData[i].id

                vk.api.messages.send({
                    peer_id: sendId,
                    message: `Итак, результаты раунда...`,
                    random_id: utils.random(-200000000, 20000000000)
                }).catch((err) => {})

                vk.upload.messagePhoto({
                    source: {
                        value: `./pictures/wheel/${db.convsData[i].gameData.resultData.result}.jpg`
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
                let result = utils.random(0, 36)
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