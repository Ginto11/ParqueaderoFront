import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LoginUsuario } from '../interfaces/login-usuario.interface';
import { environment } from '../../environments/environment';

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
