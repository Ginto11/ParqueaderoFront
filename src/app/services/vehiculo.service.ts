import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PostVehiculo } from '../interfaces/post-vehiculo.interface';
import { lastValueFrom } from 'rxjs';
import { ResponseHttp } from '../interfaces/response-http.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private http = inject(HttpClient);

  constructor() { }


  registrar = async (vehiculo: PostVehiculo) :Promise<any> => {
    try{

      return await lastValueFrom(
        this.http.post(`${environment.URL_SERVER}/api/vehiculos`, vehiculo)
      );

    }catch(error){
      throw error;
    }
  }

  obtenerVhiculosPorUsuario = async (id: number) :Promise<ResponseHttp> => {
    try{
      return await lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/vehiculos/usuario/${id}`)
      )
    }catch(error){
      throw error;
    }
  }
}
