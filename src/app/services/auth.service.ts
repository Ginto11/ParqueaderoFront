import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginUsuario } from '../interfaces/login-usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  constructor() { }

  login = async (usuario: LoginUsuario) :Promise<any> => {
    try {

      return await lastValueFrom(
        this.http.post(`${environment.URL_SERVER}/api/auth`, usuario)
      );

    }catch(error){
      throw error;
    }
  }

}
