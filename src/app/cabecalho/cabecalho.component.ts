import { Router } from '@angular/router';
import { CategoriasService } from './../service/categorias.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  categorias: Categoria[] = [];
  todos : string = '';


  constructor(private service: CategoriasService, private formBuilder: FormBuilder, private route: Router ) { }

  ngOnInit(): void {
    this.mostrarTodasCategorias();

  }

  mostrarTodasCategorias():void {
    this.service.buscarTodasCategorias().subscribe(categoria => this.categorias = categoria);

  }

  searchForm = this.formBuilder.group({
    livro: '',
  });

  buscaLivro(){
    let tituloLivroOuNomeAutor = this.searchForm.value.livro;
    this.route.navigate(['/pesquisa', tituloLivroOuNomeAutor]);
  }
}

