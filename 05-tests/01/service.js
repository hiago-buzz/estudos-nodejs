const {
    get
} = require('axios')

const URL = `https://swapi.co/api/people`;


async function getPeople(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const result = await get(url);
    return result.data.results.map(mapearPessoas)

}

function mapearPessoas(item) {
    return {
        nome: item.name,
        altura: item.height
    }
}

module.exports = {
    getPeople
}