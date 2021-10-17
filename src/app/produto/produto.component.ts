import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produtos } from '../model/Produtos';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ListaProdutosService } from '../service/lista-produtos.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})

export class ProdutoComponent implements OnInit {
  categoria: Categoria = new Categoria();
  produtos: Produtos = new Produtos();
  listaCategoria: Categoria[];
  idCategoria: number;
  usuario: Usuario = new Usuario();
  idUsuario = environment.id;
  listaProdutos: Produtos[];

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    private categoriaService: CategoriaService,
    public authService: AuthService,
    private carrinho: ListaProdutosService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    window.scroll(0, 0);

    this.authService.refreshToken();
    this.categoriaService.refreshToken();
    this.produtosService.refreshToken();
    this.findByIdUsuario();
    this.getAllCategorias();
    this.getAllProdutos();
  }

  getAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findByIdUsuario() {
    this.authService
      .getByIdUsuario(this.idUsuario)
      .subscribe((resp: Usuario) => {
        this.usuario = resp;
      });
  }

  findByIdCategoria() {
    this.categoriaService
      .getByIdCategoria(this.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }

  getAllProdutos() {
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[]) => {
      this.listaProdutos = resp;
    });
  }

  atualizar() {
    this.categoria.id = this.idCategoria;
    this.produtos.categoria = this.categoria;
    this.usuario.id = this.idUsuario;
    this.produtos.usuario = this.usuario;

    console.log(this.produtos);

    this.produtosService
      .postProdutos(this.produtos)
      .subscribe((resp: Produtos) => {
        this.produtos = resp;
        alert('Produto cadastrado!');
        this.produtos = new Produtos();
        this.getAllProdutos();
      });
  }
}
