const repo=require('../repositories/currencyRepository');

class CurrencyController {

    index(req, res) {
       repo.fetchAll((result)=>{

        res.send([{title:'cibt',data:result}]);
       });
    }
}

module.exports = new CurrencyController();