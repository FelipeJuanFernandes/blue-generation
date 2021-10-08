import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    ProdutosComponent,
    SobreComponent,
    ContatoComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    CategoriaComponent,
    ProdutosEditComponent,
    ProdutosDeleteComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    UsuarioEditComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
