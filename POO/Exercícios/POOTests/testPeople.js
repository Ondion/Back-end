var Pessoa = /** @class */ (function () {
    function Pessoa(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    Pessoa.prototype.getNomePessoa = function () {
        return 42;
    };
    return Pessoa;
}());
var teste = new Pessoa('fabio', 'fabio@fabio.com');
console.log(teste.getNomePessoa());
