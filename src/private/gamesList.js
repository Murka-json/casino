import config from '../../config.js'

export default (ctx) => {
    if(ctx.messagePayload?.command == "games_list") {
        return ctx.send(`
Беседы Wheel:
${config.wheel_list.map((value) => value + "\n").join("")}\n

Беседы Dice:
${config.dice_list.map((value) => value + "\n").join("")}\n
`)
    }
}