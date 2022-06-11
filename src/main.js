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
import red from './games/wheel/bets/red.js'
import black from './games/wheel/bets/black.js'
import even from './games/wheel/bets/even.js'
import noEven from './games/wheel/bets/noEven.js'
import int118 from './games/wheel/bets/int118.js'
import int1936 from './games/wheel/bets/int1936.js'
import int112 from './games/wheel/bets/int112.js'
import int1324 from './games/wheel/bets/int1324.js'
import int2536 from './games/wheel/bets/int2536.js'
import number from './games/wheel/bets/number.js'

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
    red(ctx, user, conv)
    black(ctx, user, conv)
    even(ctx, user, conv)
    noEven(ctx, user, conv)
    int118(ctx, user, conv)
    int1936(ctx, user, conv)
    int112(ctx, user, conv)
    int1324(ctx, user, conv)
    int2536(ctx, user, conv)
    number(ctx, user, conv)
}