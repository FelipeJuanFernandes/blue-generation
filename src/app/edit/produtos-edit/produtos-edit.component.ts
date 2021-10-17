import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produtos } from 'src/app/model/Produtos';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-edit',
  templateUrl: './produtos-edit.component.html',
  styleUrls: ['./produtos-edit.component.css']
})
export class ProdutosEditComponent implements OnInit {

  produtos: Produtos = new Produtos()
  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number
  listaProdutos: Produtos[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    public authService: AuthService,
    private categoriaService: CategoriaService
    ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    
    let id = this.route.snapshot.params['id']
    this.findByIdProdutos(id)
    this.findAllCategoria

    this.authService.refreshToken()
    this.categoriaService.refreshToken()
    this.produtosService.refreshToken()
    this.getAllCategorias()
  }

  findByIdProdutos(id: number) {
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produtos = resp
    })
  }

  getAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }
  
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  atualizar() {
    this.categoria.id = this.idCategoria
    this.produtos.categoria = this.categoria

    this.produtosService.putProdutos(this.produtos).subscribe((resp: Produtos) => {
      this.produtos = resp
      alert('Produto atualizado!')
      this.router.navigate(['/inicio'])
    })
  }

}
