import { Component, inject, OnInit } from '@angular/core';
import { CupoService } from '../../../../services/cupo.service';
import { RespuestasService } from '../../../../services/respuestas.service';
import { CupoOcupado } from '../../../../interfaces/cupos-ocupados.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestionar-parqueadero',
  imports: [CommonModule, RouterLink],
  templateUrl: './gestionar-parqueadero.component.html',
  styles: ``
})
export default class GestionarParqueaderoComponent implements OnInit {

  private cupoService = inject(CupoService);
  private respuestasService = inject(RespuestasService);
  
  cupos: CupoOcupado[] = [];

  async ngOnInit(): Promise<void> {

    window.scrollTo(0, 0);
    
    try{
      const { data: listaCuposOcupados } = await this.cupoService.obtenerCuposOcupados();

      this.cupos = listaCuposOcupados;
      console.log(this.cupos)
    }catch(error){
      alert(this.respuestasService.serverError(error));
    }
  }
  
  darSalida = async (cupo: CupoOcupado) :Promise<void> => {
    console.log(cupo);
  }

}
