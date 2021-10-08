import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  categoriaAtivo: boolean
  
constructor(
  private router: Router,
  private categoriaService: CategoriaService
      
) { }

ngOnInit() {
  if (environment.token == '') {
    this.router.navigate(['/entrar'])
  }

    this.findAllCategorias()
}

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
    this.listaCategoria = resp
  })
  }

  ativoCategoria(event: any){
    this.categoriaAtivo  = event.target.value 
  }

  cadastrar(){ 
    this.categoria.ativo= this.categoriaAtivo
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
    this.categoria = resp
    alert('Categoria cadastrada!')
    this.findAllCategorias()
    this.categoria = new Categoria()
    })
  }
}
