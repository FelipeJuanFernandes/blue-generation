import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://bluegeneration.herokuapp.com/categoria', this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('https://bluegeneration.herokuapp.com/categoria', categoria, this.token)
  }

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`https://bluegeneration.herokuapp.com/categoria/${id}`, this.token)
  }

  putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>('https://bluegeneration.herokuapp.com/categoria', categoria, this.token)
  } 

  deleteCategoria(id: number) {
    return this.http.delete(`https://bluegeneration.herokuapp.com/categoria/${id}`, this.token)
  }
}
