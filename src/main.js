import start from './private/start.js'
import gamesList from './private/gamesList.js'
import modesWheel from './admin/modes/wheel.js'

export default (ctx, vk, config) => {
    start(ctx)
    gamesList(ctx)
    modesWheel(ctx)
}