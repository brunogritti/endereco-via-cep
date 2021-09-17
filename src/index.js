function getAddressByCEP (cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(function(response) {
        console.log(response);
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