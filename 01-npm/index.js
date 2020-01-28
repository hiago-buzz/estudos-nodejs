function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
};


Pessoa.prototype.nomeCompleto = function () {
    return this.nome + " " + this.sobrenome;
};

var b = new Pessoa("Maria", "Santos");

console.log(b)
console.log("Nome completo:", b.nomeCompleto())


