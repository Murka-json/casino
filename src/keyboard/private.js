import { Keyboard } from 'vk-io'

export default {
    menu_keyboard: Keyboard.keyboard([
        [
            Keyboard.textButton({ label: "Играть", payload: { command: "games_list" }, color: "positive" })
        ]
    ])
}