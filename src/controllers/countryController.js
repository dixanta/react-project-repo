const repo=require('../repositories/countryRepository');

class CountryController {

    index(req, res) {
       repo.fetchAll((result)=>{

        res.send([{title:'cibt',data:result}]);
       });
    }
}

module.exports = new CountryController();