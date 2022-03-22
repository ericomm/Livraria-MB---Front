import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { DetalhesLivroComponent } from './detalhes-livro/detalhes-livro.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from './tela-inicial/pesquisa/pesquisa.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent},
  { path: 'livro', component: DetalhesLivroComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'erro', component: PaginaErroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
