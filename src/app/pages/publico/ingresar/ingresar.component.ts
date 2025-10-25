import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginUsuario } from '../../../interfaces/login-usuario.interface';
import { LocalstorageService } from '../../../services/localstorage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { RespuestasService } from '../../../services/respuestas.service';

@Component({
  selector: 'app-ingresar',
  imports: [RouterLink, FormsModule],
  templateUrl: './ingresar.component.html',
  styles: ``
})
export default class IngresarComponent implements OnInit {

  private router = inject(Router);
  private authService = inject(AuthService);
  private respuestasService = inject(RespuestasService);
  private localstorageService = inject(LocalstorageService);

  isCargando = false;

  usuario: LoginUsuario = {
    identificador: null,
    contrasena: null
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ingresar = async () => {
    try {
      //INICIANDO LOGUEO
      this.isCargando = true;
      let res = await this.authService.login(this.usuario);

      //SI CPDIGO ES EXITOSO
      if (res.codigo == 200) {
        
        if(res.usuario.rol == 'Admin'){
          this.router.navigate(['dashboard/admin'])
        }

        if(res.usuario.rol == 'Cliente'){
          this.router.navigate(['dashboard/cliente'])
        }

        this.localstorageService.setItem("usuario-parqueadero", JSON.stringify(res.usuario));
        this.isCargando = false;
      }
    } catch (error: unknown) {
      alert(this.respuestasService.serverError(error));
      this.isCargando = false;
    }
  }

}
