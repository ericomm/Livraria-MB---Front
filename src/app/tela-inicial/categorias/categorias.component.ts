import { LivrosService } from './../../service/livros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/model/livro';
import { Categoria } from 'src/app/model/categoria';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  livros: Livro[] = [];


  constructor(private route: ActivatedRoute, private service: LivrosService, private router: Router, private serviceCategoria: CategoriasService ) { }

  ngOnInit(): void {

    const categoria = String(this.route.snapshot.paramMap.get("nome"));
    this.buscarLivrosPorCategoria(categoria);

  }

  buscarLivrosPorCategoria(nome:string){
    this.service.buscarTodosLivrosPorCategoria(nome).subscribe(livro => this.livros = livro);
  }


}
