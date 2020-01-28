/*
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obter
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null,{
            id: 1,
            nome: 'Hiago',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '94463-2951',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'das Pedras',
            numero: 0
        })
    }, 2000);
}


obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.log("Deu Erro no Usuario", error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.log("Deu Erro no Telefone", error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.log("Deu Erro no Telefone", error)
                return;
            }

            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})

