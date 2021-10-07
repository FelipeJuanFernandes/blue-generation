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
