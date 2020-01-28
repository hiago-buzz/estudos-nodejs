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


const usuarioPromise = obterUsuario()
// para manipular o successo usamos o .then()
// para manipular os erros usamos o .catch()
usuarioPromise
    .then((usuario)=>{
        return obterTelefone(usuario.id)
        .then((result)=>{
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id,
                },
                telefone: result
            }
        })
    })
    .then((resultado)=>{
        const endereco = obterEnderecoAsync(resultado.usuario.id);
        return endereco.then((result)=>{
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result    
            }
        })

    })
    .then((resultado) => {
        console.log(`
            Nome: ${resultado.usuario.nome},
            endereço: Rua ${resultado.endereco.rua} - Nº ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
        `)
    })
    .catch((error) => {
        console.error('DEU RUIM', error)
    })



