import start from './private/start.js'
import gamesList from './private/gamesList.js'
import bonusBuy from './private/bonusBuy.js'
import settings from './private/settings.js'
import newName from './private/newName.js'
import topDay from './private/topDay.js'
import topWeek from './private/topWeek.js'
import balance from './games/global/balance.js'
import obichnaya from './activate/obichnaya.js'
import premium from './activate/premium.js'
import premiumPlus from './activate/premiumPlus.js'
import wheel from './games/wheel/wheel.js'
import bank from './games/global/bank.js'

export default (ctx, vk, user, conv) => {
    start(ctx)
    gamesList(ctx)
    bonusBuy(ctx, vk)
    settings(ctx)
    newName(ctx, user)
    topDay(ctx)
    topWeek(ctx)
    balance(ctx, user)
    obichnaya(ctx, user, conv)
    premium(ctx, user, conv)
    premiumPlus(ctx, user, conv)
    wheel(ctx, conv)
    bank(ctx, conv)
}