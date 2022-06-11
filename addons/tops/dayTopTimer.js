import utils from "../utils.js"
import config from "../../config.js"
import db from '../../db/db.json'

import { VK } from "vk-io"

const vk = new VK({
    token: config.group_token,
    pollingGroupId: config.group_id
})

export default setInterval(() => {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let o = `${utils.nols(hour)}:${utils.nols(minute)}`
    if (o == '00:00') {
        let topS = 0
        let top = []
        let topme = []

        for (let i in db.usersData) {
            top.push({
                id: db.usersData[i].id,
                name: db.usersData[i].name,
                win: db.usersData[i].winDay
            })
        }

        top.sort(function (a, b) {
            if (b.win > a.win) return 1
            if (b.win < a.win) return -1
            return 0
        });
        for (let s = 0; s < top.length; s++) {
            topme.push(top[s].id)
        }
        for (let j in top) {
            topS += 1

            if(topS == 1) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
            if(topS == 2) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
            if(topS == 3) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
            if(topS == 4) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
            if(topS == 5) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
            if(topS == 6) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
            if(topS == 7) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
            if(topS == 8) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
            if(topS == 9) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
            if(topS == 10) {
                db.usersData[top[j].id].bbalance += Number(config.dailyTopPrizes[topS - 1])
                db.usersData[top[j].id].winDay = 0
                vk.api.messages.send({
                    peer_id: top[j].id,
                    message: `🎁 Вы заняли ${topS} место в ежедневном рейтинге игроков и получили ${utils.number_format(config.dailyTopPrizes[topS - 1])} VkCoin!`,
                    random_id: utils.random(-200000000, 200000000)
                }).catch((err) => {
                    console.log(`Ошибка при отправлке сообщения ${err}`);
                });
            }
        }
    }
}, 60000)