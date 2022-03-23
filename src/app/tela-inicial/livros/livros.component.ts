import { LivrosService } from './../../service/livros.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Livro [] = []

  constructor(private service: LivrosService) { }

  ngOnInit(): void {
    this.service.bucarTodosLivros().subscribe(livro=>this.livros = livro)
  }

}
