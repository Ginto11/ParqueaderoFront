import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PostReserva } from '../interfaces/post-reserva.interface';
import { lastValueFrom } from 'rxjs';
import { ResponseHttp } from '../interfaces/response-http.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private http = inject(HttpClient);

  constructor() { }

  insertar = async (reserva: PostReserva) :Promise<any> => {
    try{
      return await lastValueFrom(
        this.http.post(`${environment.URL_SERVER}/api/reservas`, reserva)
      );
    }catch(error){
      throw error;
    }
  }

  obtenerReservasPorUsuario = async (id: number) :Promise<any> => {
    try {
      return await lastValueFrom(
        this.http.get(`${environment.URL_SERVER}/api/reservas/usuario/${id}`)
      )
    }catch(error){
      throw error;
    }
  }

  obtenerReservasMasRecientesPorUsuario = async (id: number) :Promise<any> => {
    try {
      return await lastValueFrom(
        this.http.get(`${environment.URL_SERVER}/api/reservas/recientes/${id}`)
      )
    }catch(error){
      throw error;
    }
  }

  obtenerReservasActivasPorUsuario = async (usuarioId: number) :Promise<ResponseHttp> => {
    try{
      return await lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/reservas/activas/${usuarioId}`)
      );
    }catch(error){
      throw error;
    }
  }

  cancelarReserva = async (id: number) :Promise<ResponseHttp> => {
    try{
      return await lastValueFrom(
        this.http.delete<ResponseHttp>(`${environment.URL_SERVER}/api/reservas/${id}`)
      );
    }catch(error){
      throw error;
    }
  }

  obtenerTodasLasReservasActivas = async () :Promise<ResponseHttp> => {
    try{
      return await lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/reservas/activas`)
      );
    }catch(error){
      throw error;
    }
  }

  obtenerUltimasReservas = async () :Promise<ResponseHttp> => {
    try {
      return await lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/reservas/ultimas-reservas`)
      )
    }catch(error){
      throw error;
    }
  }

  ingresarReservaConCupoId = async (id: number) :Promise<ResponseHttp> => {
    try {
      return await lastValueFrom(
        this.http.get<ResponseHttp>(`${environment.URL_SERVER}/api/reservas/ingresar-vehiculo/${id}`)
      )
    }catch(error){
      throw error;
    }
  }
}
