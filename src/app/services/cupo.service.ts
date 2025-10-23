import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cupo } from '../interfaces/cupo.interface';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ResponseHttp } from '../interfaces/response-http.interface';

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
}
