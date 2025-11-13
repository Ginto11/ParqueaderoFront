import { Component, inject, OnInit } from '@angular/core';
import { CupoService } from '../../../../services/cupo.service';
import { RespuestasService } from '../../../../services/respuestas.service';
import { CupoOcupado } from '../../../../interfaces/cupos-ocupado.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cupo } from '../../../../interfaces/cupo.interface';
import { FormsModule } from "@angular/forms";
import { ReservaService } from '../../../../services/reserva.service';

@Component({
  selector: 'app-gestionar-parqueadero',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './gestionar-parqueadero.component.html',
  styles: ``
})
export default class GestionarParqueaderoComponent implements OnInit {

  private cupoService = inject(CupoService);
  private reservaService = inject(ReservaService);
  private respuestasService = inject(RespuestasService);
  
  cuposOcupados: CupoOcupado[] | null = null;
  copiaCuposOcupados: CupoOcupado[] | null = null;
  cupoBuscado: CupoOcupado | null = null;
  cuposDisponibles: Cupo[] | null = null;
  placa: string = '';

  async ngOnInit(): Promise<void> {

    window.scrollTo(0, 0);
    
    try{
      const { data: listaCuposOcupados } = await this.cupoService.obtenerCuposOcupados();

      this.cuposOcupados = listaCuposOcupados;
      this.cuposDisponibles = null;
    }catch(error){
      alert(this.respuestasService.serverError(error));
    }
  }

  seleccionEstado = async (evento: Event): Promise<void> => {
    
    const $input = evento.target as HTMLSelectElement;

    try {

      const cupos = await this.cupoService.obtenerCupos($input.value);

      if($input.value == 'disponibles'){
        this.cuposDisponibles = cupos.data;
        this.cuposOcupados = null;
        this.cupoBuscado = null;
      }

      if($input.value == 'ocupados'){
        this.cuposOcupados = cupos.data;
        this.cuposDisponibles = null;
        this.cupoBuscado = null;
      }

    }catch(error){
      this.respuestasService.serverError(error);
    }
  }
  
  darSalida = async (cupoId: number) :Promise<void> => {
    try {
      const res = await this.cupoService.salidaVehiculo(cupoId);

      if(res.codigo == 200){
        alert(res.data)
        window.location.reload();
      }
      
    }catch(error){
      alert(this.respuestasService.serverError(error));
    }
  }

  darIngreso = async (cupoId: number): Promise<void> => {
    try{
      const res = await this.reservaService.ingresarReservaConCupoId(cupoId);

      console.log(res)

      if(res.codigo == 200){
        alert(`${res.data}`)
        window.location.reload();
      }
      
    }catch(error){
      this.respuestasService.serverError(error);
    }
  }

  buscarVehiculo = async () :Promise<void> => {
    try {

      if(this.placa == ''){
        alert('Ingrese una placa, por favor...');
      }

      this.copiaCuposOcupados = this.cuposOcupados;

      const res = await this.cupoService.buscarCupoPorPlacaVehiculo(this.placa);


      this.cupoBuscado = res.data;
      this.cuposDisponibles = null;
      this.cuposOcupados = null;

    }catch(error){
      alert(this.respuestasService.serverError(error));
    }
  }

  limpiarBusqueda =  () :void => {
    this.placa = '';
    this.cupoBuscado = null;
    this.cuposOcupados = this.copiaCuposOcupados;
  }

}
