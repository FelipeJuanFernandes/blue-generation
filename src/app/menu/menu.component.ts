import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {
  id = environment.id;
  nome = environment.nome;
  idUsuario = environment.id;
  
  usuario: Usuario = new Usuario();
  
  constructor(
    private router: Router,
    public authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.refreshToken()
    this.findByIdUsuario()

  }

  sair() {
    this.router.navigate(['/entrar']);
    environment.token = '';
    environment.nome = '';
  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
    });
    
    let ok : boolean = false
    if(environment.tipo == "adm") {
      ok = true
    } return ok
  }
  }


