/*
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obter
*/
// importando módulo do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // quando houver algum erro -> reject(ERRO)
    // quando success -> resolve
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Hiago',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '94463-2951',
                ddd: 11
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'das Pedras',
            numero: 0
        })
    }, 2000);
}

main()
// primeiro passo adicionar a palavra async --> automaticamente ela retorná uma promise
async function main(usuario) {
    try {
        console.time('media--Promise')
         usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(` 
            Nome: ${usuario.nome},
            Telefone: ${telefone.ddd} ${telefone.telefone}
            Endereço: ${endereco.rua} - Nº ${endereco.numero}
        `)
        console.timeEnd('media--Promise')
        extraInfo()
    }
    catch (error) {
        console.error('Deu Ruim: ', error);
    }
}


async function extraInfo(usuario){
    try{
         usuario = await obterUsuario();
        console.log(`
            id: ${usuario.id},
            Nascimento: ${usuario.dataNascimento}
        `)
    }
    catch (error){
        console.error("Xablau", error)
    }
}