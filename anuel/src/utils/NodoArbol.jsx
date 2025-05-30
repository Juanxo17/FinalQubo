export class NodoArbol {
    constructor(valor){
        this.valor = valor;
        this.hijos = [];
    }
    agregarHijo(NodoArbol){
        this.hijos.push(NodoArbol);
    }
}