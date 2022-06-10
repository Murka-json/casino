import { VK } from 'vk-io'
import fs from 'fs'
import deferred from 'deferred'
import config from './config.js'
import db from './db/db.json'
import keyboards from './src/keyboard/private.js'
import keyboardsConvs from './src/keyboard/games.js'

import platform from './src/main.js'

const vk = new VK({
    token: config.group_token,
    pollingGroupId: config.group_id
})

const defferred = [];

vk.updates.on("message", async(ctx) => {
    if(!ctx.isUser || ctx.isOutbox || !ctx.text) return
    defferred.forEach(async (data) => {
        if (data.user_id == ctx.senderId && ctx.peerId == data.peer_id) {
            data.def.resolve(ctx);
            return defferred.splice(defferred.indexOf(data), 1);
        }
    });
    ctx.question = async (text, params = {}) => {
        await ctx.send(text, params);
        var def = deferred();
        defferred.push({
            user_id: ctx.senderId,
            def: def,
            peer_id: ctx.peerId,
            payload: ctx.messagePayload
        });
        return def.promise((data) => {
            return data 
        });
    };
    let user = db.usersData[ctx.senderId]
    let conv = db.convsData[ctx.peerId]
    if(!user) {
        const [userData] = await vk.api.users.get({ user_ids: ctx.senderId })
        db.usersData[ctx.senderId] = {
            id: ctx.senderId,
            name: userData.first_name,
            balance: 0,
            bbalance: 0,
            winDay: 0,
            winWeek: 0
        }
        if(!ctx.isChat) return ctx.send({
            message: `Добро пожаловать в ${config.project_name}`,
            keyboard: keyboards.menu_keyboard
        })
    }
    if(ctx.isChat && !conv) {
        db.convsData[ctx.peerId] = {
            id: ctx.peerId,
            gameData: {
                game: null,
                procent: 0,
                bets: {},
                amount: 0,
                resultData: {
                    result: null,
                    hash: null,
                    sol: null
                }
            }
        }
        return ctx.send({
            message: `Вы успешно зарегистрировали беседу #${ctx.peerId}`,
            keyboard: keyboardsConvs.buy_conv
        })
    }
    platform(ctx, vk, user, conv)
})

import './addons/tops/dayTopTimer.js'
import './addons/tops/weekTopTimer.js'

setInterval(() => {
    fs.promises.writeFile('./db/db.json', JSON.stringify(db, null, '\t'))
}, 10000)

setInterval(() => {
    fs.promises.writeFile(`./db/backups/db_${new Date().getDay()}_${new Date().getHours()}.json`, JSON.stringify(db, null, '\t'))
}, 43200000) // 12 часов = 43200000

vk.updates.start()
    .then(() => console.log(config.project_name + " is started"))
    .catch((e) => console.error("Start is failed: " + e))