import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import {ContatoComponent} from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {SobreComponent} from './sobre/sobre.component';



const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  {path: 'contato', component: ContatoComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  { path: 'inicio', component: InicioComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
