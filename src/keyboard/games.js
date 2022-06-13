import { Keyboard } from 'vk-io'

export default {
    wheel: Keyboard.keyboard([
        [
            Keyboard.textButton({ label: "Банк", payload: { command: "bank" },  color: "positive" }),
            Keyboard.textButton({ label: "Баланс", payload: { command: "balance" },  color: "positive" }),
        ],
        [
            Keyboard.textButton({ label: "Чётное", payload: { command: "wheel#even" },  color: "primary" }),
            Keyboard.textButton({ label: "На число", payload: { command: "wheel#number" },  color: "positive" }),
            Keyboard.textButton({ label: "Нечётное", payload: { command: "wheel#noEven" },  color: "primary" }),
        ],
        [
            Keyboard.textButton({ label: "1-18", payload: { command: "wheel#118" },  color: "primary" }),
            Keyboard.textButton({ label: "19-36", payload: { command: "wheel#1936" },  color: "primary" }),
        ],
        [
            Keyboard.textButton({ label: "1-12", payload: { command: "wheel#112" },  color: "primary" }),
            Keyboard.textButton({ label: "13-24", payload: { command: "wheel#1324" },  color: "primary" }),
            Keyboard.textButton({ label: "25-36", payload: { command: "wheel#2536" },  color: "primary" }),
        ],
        [
            Keyboard.textButton({ label: "Красное", payload: { command: "wheel#red" },  color: "primary" }),
            Keyboard.textButton({ label: "Чёрное", payload: { command: "wheel#black" },  color: "primary" }),
        ],
        [
            Keyboard.urlButton({ label: "Пополнить", url: "https://vk.com/coin#x715157858_1000_2000000000_1" }),
            Keyboard.textButton({ label: "Вывести", payload: { command: "output" },  color: "positive" }),
        ]
    ]),
    dice: Keyboard.keyboard([
        [
            Keyboard.textButton({ label: "Банк", payload: { command: "bank" },  color: "positive" }),
            Keyboard.textButton({ label: "Баланс", payload: { command: "balance" },  color: "positive" }),
        ],
        [
            Keyboard.textButton({ label: "1", payload: { command: "dice#int1" },  color: "primary" }),
            Keyboard.textButton({ label: "2", payload: { command: "dice#int2" },  color: "primary" }),
            Keyboard.textButton({ label: "3", payload: { command: "dice#int3" },  color: "primary" }),
        ],
        [
            Keyboard.textButton({ label: "4", payload: { command: "dice#int4" },  color: "primary" }),
            Keyboard.textButton({ label: "5", payload: { command: "dice#int5" },  color: "primary" }),
            Keyboard.textButton({ label: "6", payload: { command: "dice#int6" },  color: "primary" }),
        ],
        [
            Keyboard.textButton({ label: "Чётное", payload: { command: "dice#even" },  color: "secondary" }),
            Keyboard.textButton({ label: "Нечётное", payload: { command: "dice#noEven" },  color: "secondary" }),
        ],
        [
            Keyboard.urlButton({ label: "Пополнить", url: "https://vk.com/coin#x715157858_1000_2000000000_1" }),
            Keyboard.textButton({ label: "Вывести", payload: { command: "output" },  color: "positive" }),
        ]
    ]),
    buy_conv: Keyboard.keyboard([
        [
            Keyboard.textButton({ label: "Обычная 0.5% (10кк)", payload: { command: "buy_obichnaya" },  color: "positive" })
        ],
        [
            Keyboard.textButton({ label: "Премиальная 1% (25кк)", payload: { command: "buy_premium" },  color: "positive" })
        ],
        [
            Keyboard.textButton({ label: "Премиальная+ 2% (50кк)", payload: { command: "buy_premiumPlus" },  color: "positive" })
        ]
    ]),
    new_game: Keyboard.keyboard([
        [
            Keyboard.textButton({ label: "Wheel", payload: { command: "game_wheel" },  color: "positive" })
        ],
        [
            Keyboard.textButton({ label: "Dice", payload: { command: "game_dice" },  color: "positive" })
        ],
    ]),
    stats: Keyboard.keyboard([
        [
            Keyboard.textButton({ label: "День", payload: { command: "stats", action: 'day' },  color: "positive" }),
            Keyboard.textButton({ label: "Неделя", payload: { command: "stats", action: 'week' },  color: "positive" })
        ],
        [
            Keyboard.textButton({ label: "Всё время", payload: { command: "stats", action: 'all' },  color: "positive" })
        ]
    ]).inline(true)
}