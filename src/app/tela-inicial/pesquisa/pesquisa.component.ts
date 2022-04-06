import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/model/livro';
import { LivrosService } from 'src/app/service/livros.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  livros: Livro[] = [];


  constructor(private route: ActivatedRoute, private service: LivrosService ) { }

  ngOnInit(): void {
    const tituloEnomeAutor = String(this.route.snapshot.paramMap.get('tituloLivroOuNomeAutor'));
    this.buscarTitulOuAutor(tituloEnomeAutor);
  }

  buscarTitulOuAutor(tituloLivroOuNomeAutor: string){
    this.service.buscarTituloOuAutor(tituloLivroOuNomeAutor).subscribe(livro => this.livros = livro);

  }


}
