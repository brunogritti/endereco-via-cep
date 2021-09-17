function getAddressByCEP (cep) {
    let cepstring = cep;
    let url = `https://viacep.com.br/ws/${cepstring}/json/`;
    
    fetch(url)
    .then(function(response) {
        return response.data;
    });
}

function getCityByCEP (cep) {
    //
}

function getStateByCEP (cep) {
    //
}

module.exports = { 
    getAddressByCEP,
    getCityByCEP,
    getStateByCEP
}