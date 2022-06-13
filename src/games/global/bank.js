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
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].red > 0) {
                textred = 'Ставки на красное:'
                red += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].red)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].red)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].black > 0) {
                textblack = 'Ставки на чёрное:'
                black += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].black)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].black)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].even > 0) {
                texteven = 'Ставки на чётное:'
                even += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].even)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].even)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].noEven > 0) {
                textnoEven = 'Ставки на нечётное:'
                noEven += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].noEven)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].noEven)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int118 > 0) {
                textint118 = 'Ставки на 1-18:'
                int118 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int118)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int118)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int1936 > 0) {
                textint1936 = 'Ставки на 19-36:'
                int1936 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int1936)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int1936)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int112 > 0) {
                textint112 = 'Ставки на 1-12:'
                int112 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int112)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int112)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int1324 > 0) {
                textint1324 = 'Ставки на 13-24:'
                int1324 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int1324)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int1324)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int2536 > 0) {
                textint2536 = 'Ставки на 25-36:'
                int2536 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int2536)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int2536)
            }
            for(let j in conv.gameData.bets[i].numbers) {
                if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].numbers[j].amount > 0) {
                    textnumbers = 'Ставки на числа:'
                    numbers += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].numbers[j].amount)} VkCoin на число ${conv.gameData.bets[i].numbers[j].number}\n`
                    amount += Number(conv.gameData.bets[i].numbers[j].amount)
                }
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

Хеш игры: ${conv.gameData.resultData.hash}

До конца раунда: ${utils.unixStampLeft(conv.gameData.timer)}`
        })
    }

    if(ctx.isChat && ctx.messagePayload?.command == 'bank' && conv.gameData.game == 'dice') {
        if(conv.gameData.amount < 1) return ctx.send({
            message: `В этом раунде ещё никто не поставил.\n\nХеш игры: ${conv.gameData.resultData.hash}`
        })

        let textEven = ''
        let textNoEven = ''

        let textInt1 = ''
        let textInt2 = ''
        let textInt3 = ''
        let textInt4 = ''
        let textInt5 = ''
        let textInt6 = ''


        let even = ''
        let noEven = ''

        let int1 = ''
        let int2 = ''
        let int3 = ''
        let int4 = ''
        let int5 = ''
        let int6 = ''

        let amount = 0

        for(let i in conv.gameData.bets) {
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].even > 0) {
                textEven = 'Ставки на чётное:'
                even += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].even)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].even)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].noEven > 0) {
                textNoEven = 'Ставки на нечётное:'
                noEven += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].noEven)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].noEven)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int1 > 0) {
                textInt1 = 'Ставки на 1:'
                int1 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int1)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int1)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int2 > 0) {
                textInt2 = 'Ставки на 2:'
                int2 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int2)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int2)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int3 > 0) {
                textInt3 = 'Ставки на 3:'
                int3 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int3)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int3)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int4 > 0) {
                textInt4 = 'Ставки на 4:'
                int4 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int4)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int4)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int5 > 0) {
                textInt5 = 'Ставки на 5:'
                int5 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int5)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int5)
            }
            if(conv.gameData.bets[i].peerId == ctx.peerId && conv.gameData.bets[i].int6 > 0) {
                textInt6 = 'Ставки на 6:'
                int6 += `[id${conv.gameData.bets[i].id}|${conv.gameData.bets[i].name}] - ${utils.number_format(conv.gameData.bets[i].int6)} VkCoin\n`
                amount += Number(conv.gameData.bets[i].int6)
            }
        }

        return ctx.send({
            message: `Всего поставлено: ${utils.number_format(amount)} VkCoin

${textEven}
${even}

${textNoEven}
${noEven}

${textInt1}
${int1}

${textInt2}
${int2}

${textInt3}
${int3}

${textInt4}
${int4}

${textInt5}
${int5}

${textInt6}
${int6}

Хеш игры: ${conv.gameData.resultData.hash}

До конца раунда: ${utils.unixStampLeft(conv.gameData.timer)}`
        })
    }
}