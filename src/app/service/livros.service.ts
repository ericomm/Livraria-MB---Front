import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';
import { Autor } from '../model/autor';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient, private router: Router) { }

  bucarTodosLivros():Observable<any>{
    return this.http.get('http://localhost:8080/v1/livro/');
  }

  buscarTodosLivrosPorCategoria(nome: string): Observable<any> {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    return this.http.get('http://localhost:8080/v1/livro/categoria/' + nome);
  }

  buscarTituloOuAutor(tituloOuAutor: string): Observable<any> {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    return this.http.get<Livro[]>('http://localhost:8080/v1/livro/pesquisa/' + tituloOuAutor);
  }

}

