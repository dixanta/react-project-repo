
const conn=require('../db/connection');


class CurrencyRepository {

    fetchAll(callback) {
        conn.query('select * from mst_currencies', (err, result) => {
            callback(result);
        })
    }

    insert(data,callback){
        conn.query('insert into mst_currencies()', (err, result) => {
            callback(result);
        })
    }
}

module.exports = new CurrencyRepository();