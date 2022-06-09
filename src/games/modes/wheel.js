import db from '../../../lib/mysql.js'


const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]
const addNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19 , 21, 23, 25, 27, 29, 31, 33, 35]

const int118Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
const ont1936Numbers = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
const blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]

const int112Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const int1324Numbers = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const int2526Numbers = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];


export default () => {
    setInterval(async() => {
        let gamesList = {}
        await db.request(`SELECT * FROM conversations WHERE gamemode="wheel"`)
            .then(async(res) => {
                for(i in res) {
                    let currentData = res[i]
                    gamesList[currentData.id] = {
                        ...currentData,
                        bets: await db.request(`SELECT * FROM bets WHERE gameId=${currentData.id}`).catch(err => console.log(err))
                    }
                }
            })
        for(i in gamesList) {
            let currentGame = gamesList[i]

            if(currentGame.bets.length > 0) {
                currentGame.time -= 1
                await db.request(`UPDATE conversations SET time=time-1 WHERE id=${currentGame.id}`)
            }
            if(currentGame.time < 1) {
                currentGame.result = Number(currentGame.result);
                let resultType = "зеленое";
                redNumbers.includes(currentGame.result) && (resultType = "красное");
                blackNumbers.includes(currentGame.result) && (resultType = "черное");
    
            let ratingData = {}
            let resultText = `Число: ${currentGame.result}, цвет: ${resultType}`
            for(bets in currentGame.bets) {
                let currentBet = {
                    ...currentGame.bets[d],
                    topAmount: 0
                }
                if(!ratingData[currentBet.playerId]) {
                    ratingData[currentBet.playerId] = {
                        id: currentBet.playerId,
                        gameId: currentBet.gameId,
                        topAmount: 0
                    }
                }
            }
            }
        }
    })
}