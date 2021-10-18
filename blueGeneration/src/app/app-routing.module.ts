import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContatoComponent} from './contato/contato.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {SobreComponent} from './sobre/sobre.component';



const routes: Routes = [

  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'contato', component: ContatoComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobre', component: SobreComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
