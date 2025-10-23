import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PostUsuario } from '../interfaces/post-usuario.interface';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginUsuario } from '../interfaces/login-usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http = inject(HttpClient);

  constructor() { }

  registrarUsuario = async (usuario: PostUsuario): Promise<any> => {
    try {
      
      console.log(usuario)
      return await lastValueFrom(
        this.http.post(`${environment.URL_SERVER}/api/usuarios`, usuario)
      );
    } catch (error) {
      throw error;
    }
  }

  /*ingresar = async (usuario: LoginUsuario): Promise<any> => {
    try {
      return await lastValueFrom(
        this.http.post(`${environment.URL_SERVER}/api/usuarios/login`, usuario)
      );
    }catch(error){
      throw error; 
    }
  }*/
}
