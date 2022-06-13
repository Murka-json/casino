export default (ctx) => {
    if(ctx.isChat && ctx.text.toLowerCase() === '/help') {
        return ctx.send({
            message: `Настройки беседы:
            
/stats - статистика беседы
/timer - установить таймер игры в беседе
/wheel - установить режим игры Wheel
/dice - установить режим игры Dice`
        })
    }
}