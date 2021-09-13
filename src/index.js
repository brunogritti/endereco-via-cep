let address = '';
let cep = ''

function getAddressByCEP (cep) {
    let cepstring = cep;
    let url = 'https://viacep.com.br/ws/${cepstring}/json/';
    
    fetch(url)
    .then(function(response) {
        address = response.formData;
    });
}

module.exports = { 
    getAddressByCEP: getAddressByCEP
}