import { VK } from 'vk-io'
import config from './config.js'

import platform from './src/main.js'

const vk = new VK({
    token: config.group_token,
    pollingGroupId: config.group_id
})

vk.updates.on("message", async(ctx) => {
    if(ctx.senderId < 1 || ctx.isOutbox || !ctx.text) return
    platform(ctx, vk, config)    
})


vk.updates.start()
    .then(() => console.log("NiceGames is started"))
    .catch((e) => console.log("start is failed: " + e)) 