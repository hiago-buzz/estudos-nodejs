const { getPeople } = require('./service')

/*
const item = {
    nome = hiago,
    idade = 24,
    sexo = masculino
}

const { nome, idade } = item 
console.log(nome, idade)
*/

Array.prototype.myFilter = function (callback) {
    const list = [];
    for (index in this) {
        const item = this[index];
        const result = callback(item, index, this)
        // 0; " "; null; undefined === false
        if (!result) continue;
        list.push(item)
    }
    return list;
}

async function main() {
    try {
        const {
            results
        } = await getPeople('a');

        // const familySkywalker = results.filter(item => {
        //     // por padrão precisa retornar um booleano
        //     // para informar se deve manter ou remover da lista
        //     // false -> ocultar da lista 
        //     // true -> vai mostrar na lista 
        //     // se não encontrou == -1;
        //     // se encontrou == posição no array
        //     const result = item.name.toLowerCase().indexOf(`skywalker`) !== -1;
        //     return result;
        // })
        // const names = familySkywalker.map((person) => person.name);
        // console.log("Familia Skywalker", names)

        const familyLars = results.myFilter((item, index, list) => {
            console.log(`index: ${index}, tamanho da lista: ${list.length}`)
            return item.name.toLowerCase().indexOf(`lars`) !== -1;
        })
        const names = familyLars.map((person) => person.name);
        console.log(names)

      
    }
    catch (error) {
        console.error("algo inesperado aconteceu", error)
    }
}

main()