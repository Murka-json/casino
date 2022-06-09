const config = require("../config.js");
const mysql = require("mysql2/promise");
const db = mysql.createPool(config.mySQL_connection_params);

export default {
    request: async (sql) => {
        return new Promise(async (resolve, reject) => {
            await db.execute(sql).then((data) => {
                resolve(data[0])
            }).catch((err) => {
                reject(err);
            })
        })
    }
}