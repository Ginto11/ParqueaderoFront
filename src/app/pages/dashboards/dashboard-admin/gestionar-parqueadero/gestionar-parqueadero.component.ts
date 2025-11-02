import { Component, inject, OnInit } from '@angular/core';
import { CupoService } from '../../../../services/cupo.service';
import { RespuestasService } from '../../../../services/respuestas.service';
import { CupoOcupado } from '../../../../interfaces/cupos-ocupado.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cupo } from '../../../../interfaces/cupo.interface';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-gestionar-parqueadero',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './gestionar-parqueadero.component.html',
  styles: ``
})
export default class GestionarParqueaderoComponent implements OnInit {

  private cupoService = inject(CupoService);
  private respuestasService = inject(RespuestasService);
  
  cuposOcupados: CupoOcupado[] | null = null;
  cuposDisponibles: Cupo[] | null = null;

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
      }

      if($input.value == 'ocupados'){
        this.cuposOcupados = cupos.data;
        this.cuposDisponibles = null;
      }

    }catch(error){
      this.respuestasService.serverError(error);
    }
  }
  
  darSalida = async (cupo: CupoOcupado) :Promise<void> => {
    console.log(cupo);
  }

  darIngreso = async (cupo: CupoOcupado): Promise<void> => {
    console.log(cupo)
  }

}
