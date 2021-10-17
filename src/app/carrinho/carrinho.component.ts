import { Component, OnInit } from '@angular/core';
import { ListaProdutosService } from '../service/lista-produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent implements OnInit {

  itens = this.ListaProdutosService.getItens();
  comprados = this.carrinho.getItens();

  
  // carrinhos: never[];

constructor(
  private carrinho: ListaProdutosService,
  private ListaProdutosService : ListaProdutosService
    
  ) { }
  
   ngOnInit() {
    window.scroll(0,0)
    
  }

  // limparCarrinho(){
  //   this.itens = this.ListaProdutosService.clearItens();
  // }

  // clearItens(){
  //   this.itens = []
  //   return this.itens
  // }
  
  total(){
    return this.comprados.map(item => item.preco).reduce((a, b) => a + b,0);
  }
}