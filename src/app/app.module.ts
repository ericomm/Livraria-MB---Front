import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LivrosComponent } from './tela-inicial/livros/livros.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DetalhesLivroComponent } from './detalhes-livro/detalhes-livro.component';
import { PesquisaComponent } from './tela-inicial/pesquisa/pesquisa.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './tela-inicial/categorias/categorias.component';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    CabecalhoComponent,
    LivrosComponent,
    RodapeComponent,
    DetalhesLivroComponent,
    PesquisaComponent,
    PaginaErroComponent,
    CategoriasComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
