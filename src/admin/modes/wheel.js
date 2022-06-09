import keyboard from '../../keyboard/games.js'

export default (ctx) => {
    if(ctx.text === "/wheel") {
        return ctx.send({
            message: "Режим Wheel активирован",
            keyboard: keyboard.wheel 
        })
    }
}