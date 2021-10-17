import { Injectable } from '@angular/core';
import { Produtos } from '../model/Produtos';

@Injectable({
    providedIn: 'root'
})

export class ListaProdutosService {

    carrinho: Produtos[] = []
    itens = []

    constructor() { }

    addItem(produto: Produtos){
    this.carrinho.push(produto)
    }

    getItens(){
    return this.carrinho
    }

    clearItens(){
    this.itens = []
    return this.carrinho
    }

}