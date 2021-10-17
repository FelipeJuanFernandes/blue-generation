import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css'],
})

export class ProdutosDeleteComponent implements OnInit {
  produtos: Produtos = new Produtos();
  idProduto: number;

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    this.idProduto = this.route.snapshot.params['id'];

    this.findByIdProduto(this.idProduto);
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produtos = resp;
    });
  }

  apagar() {
    this.produtoService.deleteProdutos(this.idProduto).subscribe(() => {
      alert('Produto apagado com sucesso!');
      this.router.navigate(['/produto']);
    });
  }
}
