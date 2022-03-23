import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) { }

  bucarTodosLivros():Observable<any>{
    return this.http.get('http://localhost:8080/v1/livro');
  }
}

