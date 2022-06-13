import db from '../../db/db.json'
import utils from '../../addons/utils.js'
import config from '../../config.js'

export default (ctx) => {
    if(ctx.messagePayload?.command == "week_top") {
        let topNumbers = ["🥇", '🥈', "🥉", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"]
        let topPrizes = config.weekTopPrizes
        let top = []
        let topme = []
        let my = 0
        for (let i in db.usersData){
            top.push({
                id: db.usersData[i].id,
                name: db.usersData[i].name,
                winWeek: db.usersData[i].winWeek 
            })
        }

        const find = () => {
            let pos = 1000;
    
            for (let i = 0; i < top.length; i++) {
                if(top[i].id === ctx.senderId) return pos = i;
            }

            return pos
        }
    
        top.sort(function(a, b) {
            if (b.winWeek > a.winWeek) return 1
            if (b.winWeek < a.winWeek) return -1
            return 0
        });
    
        let text = ""
        for (let s = 0; s < top.length; s++){
            topme.push(top[s].id)
        }
    
        if (top.length < 10){
            for (let j = 0; j < top.length; j++){
                text += `${topNumbers[my]} [id${db.usersData[top[j].id].id}|${db.usersData[top[j].id].name}] выйграл ${utils.number_format(top[j].winWeek)} VkCoin (Приз: ${utils.number_format(topPrizes[my])} VkCoin)\n`
                my += Number(1)
        }
        } else {
            for (let j = 0; j < 10; j++){
                text += `${topNumbers[my]} [id${db.usersData[top[j].id].id}|${db.usersData[top[j].id].name}] выйграл ${utils.number_format(top[j].winWeek)} VkCoin (Приз: ${utils.number_format(topPrizes[my])} VkCoin)\n`
                my += Number(1)
            }
        }
        return ctx.send(`🔥 Топ игроков еженедельного рейтинга:\n\n${text}\n\n🏆 Ты находишься на ${find() + 1} месте, выйграв ${utils.number_format(db.usersData[ctx.senderId].winWeek)} VkCoin за неделю (сброс каждое воскресенье в 00:00 по МСК).`)
    }
}