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

  obtenerCupos = async (dato: string): Promise<ResponseHttp> => {
    try{
      return lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/cupos/${dato}`)
      );
    }catch(error){
      throw error;
    }
  }

  obtenerVehiculosTotalesDelParqueadero = async () :Promise<ResponseHttp> => {
    try{
      return lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/cupos/cantidad-vehiculos`)
      );
    }catch(error){
      throw error;
    }
  }

  salidaVehiculo = async (cupoId : number) :Promise<any> => {
    try {
      return await lastValueFrom(
        this.http.get(`${environment.URL_SERVER}/api/cupos/salida-vehiculo/${cupoId}`)
      );
    }catch(error){
      throw error;
    }
  }

  buscarCupoPorPlacaVehiculo = async (placa : string) : Promise<ResponseHttp> => {
    try{
      return await lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/cupos/vehiculo-placa/${placa}`)
      );
    }catch(error){
      throw error; 
    }
  }
}
