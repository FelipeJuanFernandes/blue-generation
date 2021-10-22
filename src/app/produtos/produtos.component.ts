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
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  categoria: Categoria = new Categoria()
  produtos: Produtos = new Produtos()
  listaCategoria: Categoria[]
  idCategoria: number
  usuario: Usuario = new Usuario();
  idUsuario = environment.id
  listaProdutos: Produtos[]

  comprados = this.carrinho.getItens()

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    private categoriaService: CategoriaService,
    public authService: AuthService,
    private carrinho: ListaProdutosService
  ) { }

  ngOnInit() {

    // if (environment.token == '') {
    //   this.router.navigate(['/entrar'])
    // }

    window.scroll(0,0)
    this.authService.refreshToken()
    this.categoriaService.refreshToken()
    this.produtosService.refreshToken()
    this.findByIdUsuario()
    this.getAllCategorias()
    this.getAllProdutos()
    this.carrossel()
  }

  carrossel() { const panels=document.querySelectorAll('.panel')
    panels.forEach((panel)=>{ 
    console.log(panel)
    panel.addEventListener("click",()=>{ 
    removeActiveClasses()
    panel.classList.add("active");
    }) 
})

function removeActiveClasses(){
    panels.forEach((panel)=>{ 
        panel.classList.remove("active")
    })
  }
  }

  getAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=>{
    this.usuario = resp
  })
}

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
    this.categoria = resp
    })
  }

  getAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[])=>{
    this.listaProdutos = resp
  })
  }

  publicar() {
    this.categoria.id = this.idCategoria
    this.produtos.categoria = this.categoria
    this.usuario.id = this.idUsuario
    this.produtos.usuario = this.usuario
    
    console.log(this.produtos)

    this.produtosService.postProdutos(this.produtos).subscribe((resp: Produtos)=>{
    this.produtos = resp
    alert('Produto cadastrado!')
    this.produtos = new Produtos()
    this.getAllProdutos()
  })
}

  comprar(produto: any){
  this.carrinho.addItem(produto);
  alert('produto adicionado ao carrinho!')
  
}

  total(){
  return this.comprados.map(item => item.preco).reduce((a, b) => a + b,0);
  }
}