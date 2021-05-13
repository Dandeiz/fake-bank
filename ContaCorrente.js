import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0 //static para que a declaração seja válida para toda a classe
    agencia;

    _cliente;
    _saldo = 0;
    
    // Acessores

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente() { // get permite apenas a leitura, protegendo de mudanças externas
        return this._cliente;
    }

    get saldo() {
        return this._saldo
    }

    constructor(agencia, cliente) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    // Atributos / Métodos

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor < 0){
            // early return: usar o return pra parar o código caso uma condição indesejada seja verdadeira
            return
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}