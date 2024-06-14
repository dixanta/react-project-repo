
const conn=require('../db/connection');


class CountryRepository {

    fetchAll(callback) {
        conn.query('select * from mst_countries', (err, result) => {
            callback(result);
        })
    }

    insert(data,callback){
        conn.query('insert into mst_countries()', (err, result) => {
            callback(result);
        })
    }
}

module.exports = new CountryRepository();