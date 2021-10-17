import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://bluegeneration.herokuapp.com/usuarios/logar', usuarioLogin)

  }
  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://bluegeneration.herokuapp.com/usuarios/cadastrar', usuario)
  }
  getByIdUsuario(id: number): Observable<Usuario>{
  return this.http.get<Usuario>(`https://bluegeneration.herokuapp.com/usuarios/${id}`, this.token)
  }

  admin() {
    let ok : boolean = false
    if(environment.tipo == "adm") {
      ok = true
    } return ok
  }
}

// https://bluegeneration.herokuapp.com
