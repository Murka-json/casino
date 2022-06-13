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
import timer from './conv/timer.js'
import help from './conv/help.js'
import stats from './conv/stats.js'
import dice from './games/dice/dice.js'
import evenDice from './games/dice/bets/even.js'
import noEvenDice from './games/dice/bets/noEven.js'
import int1 from './games/dice/bets/int1.js'
import int2 from './games/dice/bets/int2.js'
import int3 from './games/dice/bets/int3.js'
import int4 from './games/dice/bets/int4.js'
import int5 from './games/dice/bets/int5.js'
import int6 from './games/dice/bets/int6.js'
import withdraw from '../addons/api/VkCoin/withdraw.js'

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
    timer(ctx, conv)
    help(ctx)
    stats(ctx, conv)
    dice(ctx, conv)
    evenDice(ctx, user, conv)
    noEvenDice(ctx, user, conv)
    int1(ctx, user, conv)
    int2(ctx, user, conv)
    int3(ctx, user, conv)
    int4(ctx, user, conv)
    int5(ctx, user, conv)
    int6(ctx, user, conv)
    withdraw(ctx, user)
}