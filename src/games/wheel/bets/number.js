import utils from "../../../../addons/utils.js"
import { Keyboard } from "vk-io"
import config from '../../../../config.js'

export default async (ctx, user, conv) => {
    if(ctx.isChat && ctx.messagePayload?.command == 'wheel#number') {
        if (conv.gameData.game == 'wheel') {
            let number = await ctx.question({
                message: `[id${ctx.senderId}|${user.name}], введи число на которое желаешь поставить:`
            })
            
            if(number.messagePayload && Object.keys(number.messagePayload).length > 0) return         
            if(isNaN(number.text)) return 
            if(number.text > 36 || number.text < 0) return ctx.send({
                message: `[id${ctx.senderId}|${user.name}], нельзя поставить на число меньше 0 и больше 36`
            })
            number.text = Math.floor(number.text)

            let scale = Math.floor(user.balance + user.bbalance)
            let _coin = null
            if (scale > 0) {
                _coin = await ctx.question({
                    message: `[id${ctx.senderId}|${user.name}], введи сумму ставки на число ИЛИ нажми на кнопку:`,
                    keyboard: Keyboard.builder()
                        .textButton({
                            label: `${utils.number_format(scale / 4)}`
                        }).row()
                        .textButton({
                            label: `${utils.number_format(scale / 2)}`
                        }).row()
                        .textButton({
                            label: `${utils.number_format(scale / 1)}`
                        }).inline()
                })
            }
            if(_coin.messagePayload && Object.keys(_coin.messagePayload).length > 0) return         
    
            _coin = _coin.text
            _coin = utils.rewrite_numbers(_coin)
            let message = _coin == null ? '' : _coin
            let noti = message.split('] ')
            if (message[0] == '[' && noti[0].split('|').length == 2 && (noti[0].split('|')[0] == `[club` + config.group_id || noti[0].split('|')[0] == `[public` + config.group_id)) {
                noti.splice(0, 1)
                _coin = noti.join('] ')
                _coin = _coin.replace(/(\ |\,)/ig, '');
            }
    
            if (_coin.endsWith('к') || _coin.endsWith('k')) {
                let colva = ((_coin.match(/к|k/g) || []).length);
                _coin = _coin.replace(/к/g, '')
                _coin = _coin.replace(/k/g, '')
                _coin = _coin * Math.pow(1000, colva);
            }
    
            if (_coin < 1 || isNaN(_coin)) return
            _coin = Math.floor(_coin)
            scale = Math.floor(user.balance + user.bbalance)
            if (scale < _coin) {
                return ctx.send({
                    message: `[id${ctx.senderId}|${user.name}], вам не хватает ${utils.number_format(_coin - scale)} VkCoin`
                })
            } 
            if (_coin < 1000) {
                return ctx.send({
                    message: `[id${ctx.senderId}|${user.name}], минимальная сумма ставки 1 000 VkCoin`
                })
            }
            
            let randId = utils.random(0, 5000000000)
            conv.gameData.bets[randId] = {
                id: randId,
                uid: ctx.senderId,
                name: user.name,
                amount: _coin,
                type: 'intNumber',
                number: number.text
            }
            let amountToTake = Number(_coin) - Number(user.balance)
            scale = Math.floor(user.balance + user.bbalance)
            conv.gameData.amount = 1

            if (scale >= _coin) {
            
                if (Number(user.balance) >= Number(_coin)) {
                    user.balance -= Number(_coin)
                    return ctx.send(`[id${ctx.senderId}|${user.name}], успешная ставка ${utils.number_format(_coin)} VkCoin на число`)
                }

                if (Number(user.bbalance) >= Number(_coin)) {
                    user.bbalance -= Number(_coin)
                    return ctx.send(`[id${ctx.senderId}|${user.name}], успешная ставка ${utils.number_format(_coin)} VkCoin на число`)
                }
            
                if (Number(user.bbalance) >= amountToTake) {
                    user.balance -= Number(user.balance)
                    user.bbalance -= Number(amountToTake)
                    return ctx.send(`[id${ctx.senderId}|${user.name}], успешная ставка ${utils.number_format(_coin)} VkCoin на число`)
                }
            }
        }
    }
}