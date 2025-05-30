import { NodoArbol } from "./NodoArbol";

export class Arbol {
    constructor() {
        this.raiz = null;
    }

    
    insertar(valor, valorPadre = null) {
        const nuevoNodo = new NodoArbol(valor);

        
        if (!this.raiz && !valorPadre) {
            this.raiz = nuevoNodo;
            return true;
        }

        
        if (!this.raiz && valorPadre) {
            return false;
        }

        
        if (!valorPadre) {
            this.raiz.agregarHijo(nuevoNodo);
            return true;
        }

        
        const nodoPadre = this.buscar(valorPadre);
        if (nodoPadre) {
            nodoPadre.agregarHijo(nuevoNodo);
            return true;
        }

        return false;
    }

    
    buscar(valor, nodo = this.raiz) {
        if (!nodo) return null;
        
        if (nodo.valor.id === valor.id) {
            return nodo;
        }

        
        for (const hijo of nodo.hijos) {
            const encontrado = this.buscar(valor, hijo);
            if (encontrado) return encontrado;
        }

        return null;
    }

    
    obtenerTodos(nodo = this.raiz, nivel = 0, resultado = []) {
        if (!nodo) return resultado;

        resultado.push({ nodo, nivel });

        for (const hijo of nodo.hijos) {
            this.obtenerTodos(hijo, nivel + 1, resultado);
        }

        return resultado;
    }

    
    recorrer(callback, nodo = this.raiz, nivel = 0) {
        if (!nodo) return;

        callback(nodo, nivel);

        for (const hijo of nodo.hijos) {
            this.recorrer(callback, hijo, nivel + 1);
        }
    }
}



