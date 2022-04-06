import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  buscarTodasCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:8080/v1/categoria');

  }

}
