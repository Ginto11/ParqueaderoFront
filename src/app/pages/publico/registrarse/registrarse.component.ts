import { Component, inject, OnInit } from '@angular/core';
import { PostUsuario } from '../../../interfaces/post-usuario.interface';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from "@angular/router";
import { RespuestasService } from '../../../services/respuestas.service';

@Component({
  selector: 'app-registrarse',
  imports: [FormsModule, RouterLink],
  templateUrl: './registrarse.component.html',
  styles: ``
})
export default class RegistrarseComponent implements OnInit {

  private usuarioService = inject(UsuarioService);
  private router = inject(Router);
  private respuestasService = inject(RespuestasService);

  isRegistrando = false;

  usuario: PostUsuario = {
    nombreCompleto: null,
    identificadorUsuario: null,
    contrasena: null,
    numeroTelefono: null
  }

  confirmacion = null;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  registrar = async () => {

    try {
      if (this.confirmacion != this.usuario.contrasena) {
        alert('Las contraseñas no coinciden.');
        return;
      }

      this.isRegistrando = true;

      console.log(this.usuario);

      let res = await this.usuarioService.registrarUsuario(this.usuario);

      alert(`${res.mensaje}`);

      this.isRegistrando = false;

      let isRedireccion = confirm("¿Desea iniciar sesión?");

      (isRedireccion) ? this.router.navigate(['/ingresar']) : '';

    } catch (error: unknown) {
      alert(this.respuestasService.serverError(error));
      this.isRegistrando = false;
    }
  }


}
