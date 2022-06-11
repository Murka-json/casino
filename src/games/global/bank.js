import utils from "../../../addons/utils.js"

export default (ctx, conv) => {
    if(ctx.isChat && ctx.messagePayload?.command == 'bank' && conv.gameData.game == 'wheel') {
        if(conv.gameData.amount < 1) return ctx.send({
            message: `В этом раунде ещё никто не поставил.\n\nХеш игры: ${conv.gameData.resultData.hash}`
        })
        
        let textint112 = ''
        let textint1324 = ''
        let textint2536 = ''

        let textint118 = ''
        let textint1936 = ''

        var textred = ''
        let textblack = ''

        let texteven = ''
        let textnoEven = ''

        let textnumbers = ''

        let int112 = ''
        let int1324 = ''
        let int2536 = ''

        let int118 = ''
        let int1936 = ''

        var red = ''
        let black = ''

        let even = ''
        let noEven = ''

        let numbers = ''

        let amount = 0

        for(let i in conv.gameData.bets) {
            amount += conv.gameData.bets[i].amount
        }

        for(let i in conv.gameData.bets) {
            if(conv.gameData.bets[i].type == 'red') {
                textred = 'Ставки на красное:'
                red += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
            if(conv.gameData.bets[i].type == 'black') {
                textblack = 'Ставки на черное:'
                black += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
            if(conv.gameData.bets[i].type == 'even') {
                texteven = 'Ставки на четное:'
                even += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
            if(conv.gameData.bets[i].type == 'noEven') {
                textnoEven = 'Ставки на нечетное:'
                noEven += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
            if(conv.gameData.bets[i].type == 'int118') {
                textint118 = 'Ставки на 1-18:'
                int118 += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
            if(conv.gameData.bets[i].type == 'int1936') {
                textint1936 = 'Ставки на 19-36:'
                int1936 += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
            if(conv.gameData.bets[i].type == 'int112') {
                textint112 = 'Ставки на 1-12:'
                int112 += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
            if(conv.gameData.bets[i].type == 'int1324') {
                textint1324 = 'Ставки на 13-24:'
                int1324 += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
            if(conv.gameData.bets[i].type == 'int2536') {
                textint2536 = 'Ставки на 25-36:'
                int2536 += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
            if(conv.gameData.bets[i].type == 'intNumber') {
                textnumbers = 'Ставки на числа:'
                numbers += `[id${conv.gameData.bets[i].uid}|${conv.gameData.bets[i].name}] на число ${conv.gameData.bets[i].number} - ${utils.number_format(conv.gameData.bets[i].amount)} VkCoin\n`
            }
        }

        return ctx.send({
            message: `Всего поставлено: ${utils.number_format(amount)} VkCoin

${textred}
${red}

${textblack}
${black}

${texteven}
${even}

${textnoEven}
${noEven}

${textint118}
${int118}

${textint1936}
${int1936}

${textint112}
${int112}

${textint1324}
${int1324}

${textint2536}
${int2536}

${textnumbers}
${numbers}

Хеш игры: ${conv.gameData.resultData.hash}\n\nДо конца раунда: ${utils.unixStampLeft(conv.gameData.timer)}`
        })
    }
}