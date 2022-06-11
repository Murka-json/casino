import { Keyboard } from 'vk-io'

export default {
    menu_keyboard: Keyboard.keyboard([
        [
            Keyboard.textButton({ label: "Играть", payload: { command: "games_list" }, color: "positive" })
        ],
        [
            Keyboard.textButton({ label: "Бонусные койны", payload: { command: "bonus_buy" }, color: "secondary" }),
            Keyboard.textButton({ label: "Настройки", payload: { command: "settings" }, color: "primary" })
        ],
        [
            Keyboard.urlButton({ label: "Пополнить", url: "https://vk.com/coin#x715157858_1000_2000000000_1" }),
            Keyboard.textButton({ label: "Вывести", payload: { command: "output" },  color: "positive" }),
        ],
        [
            Keyboard.textButton({ label: "🎁 Топ дня", payload: { command: "day_top" }, color: "negative" }),
            Keyboard.textButton({ label: "🔥 Топ недели", payload: { command: "week_top" }, color: "negative" })
        ],
    ]),
    settings_menu: Keyboard.keyboard([
        [
            Keyboard.textButton({ label: "Ник", payload: { command: "new_nick" }, color: "positive" })
        ],
        [
            Keyboard.textButton({ label: "Назад", payload: { command: "back" }, color: "negative" })
        ]
    ]),
    back_button: Keyboard.keyboard([
        [
            Keyboard.textButton({ label: "Назад", payload: { command: "backPayload" }, color: "negative" })
        ]
    ])
}