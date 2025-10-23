import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Soporte } from '../interfaces/post-soporte.interface';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { ResponseHttp } from '../interfaces/response-http.interface';

@Injectable({
  providedIn: 'root'
})
export class SoporteService {

  private http = inject(HttpClient);

  constructor() { }

  insertar = async (soporte: Soporte): Promise<any> => {
    try {

      return await lastValueFrom(
        this.http.post(`${environment.URL_SERVER}/api/soportes`, soporte)
      );

    }catch(error){
      throw error;
    }
  }
}
