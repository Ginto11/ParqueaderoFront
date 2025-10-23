import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ResponseHttp } from '../interfaces/response-http.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CupoService {

  private http = inject(HttpClient);

  constructor() { }

  obtenerCuposDisponibles = async (): Promise<ResponseHttp> => {
    try {
      return lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/cupos/disponibles`)
      );
    }catch(error){
      throw error;
    }
  }


  obtenerCuposOcupados = async ():Promise<ResponseHttp> => {
    try{
      return lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/cupos/ocupados`)
      );
    }catch(error){
      throw error;
    }
  }
}
