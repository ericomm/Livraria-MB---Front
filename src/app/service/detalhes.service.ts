import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class DetalhesService {

  constructor(private http: HttpClient) { }

  find(id: number): Observable<Livro> {
    return this.http.get<Livro>('http://localhost:8080/v1/livro/' + id);
  }

}
