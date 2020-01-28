const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor();
const novoEvento = 'usuario:click';
meuEmissor.on(novoEvento, function (click) {
    console.log("um usuario clicou:", click)
})


// setInterval(() => {
//     meuEmissor.emit(novoEvento, 'click na barra de navegação')
// }, 2000);

const stdin = process.openStdin()

stdin.addListener('data', function (value) {
    console.log(`Você digitou: ${value.toString().trim()}`)
})

