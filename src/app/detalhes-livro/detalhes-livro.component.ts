import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../model/livro';
import { DetalhesService } from '../service/detalhes.service';


@Component({
  selector: 'app-detalhes-livro',
  templateUrl: './detalhes-livro.component.html',
  styleUrls: ['./detalhes-livro.component.css']
})
export class DetalhesLivroComponent implements OnInit {

  livro: Livro = {} as Livro;

  constructor( private route: ActivatedRoute,  private service: DetalhesService) { }

  ngOnInit(): void {

    const livroId = Number(this.route.snapshot.paramMap.get('id'));

    this.service.find(livroId).subscribe(livro => this.livro = livro);
  }

}
