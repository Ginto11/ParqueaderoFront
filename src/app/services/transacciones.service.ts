import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseHttp } from '../interfaces/response-http.interface';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  private http = inject(HttpClient);

  constructor() { }

  obtenerIngresosDiarios = async () :Promise<ResponseHttp> => {
    try{
      return await lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/transacciones`)
      );
    }catch(error){
      throw error;
    }
  }
}
