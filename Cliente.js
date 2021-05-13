// Toda vez que o nome do arquivo começar com letra maúscula, significa uma classe. Ex: Cliente.js

export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}