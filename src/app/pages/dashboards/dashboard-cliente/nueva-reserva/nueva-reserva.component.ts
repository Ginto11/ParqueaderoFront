import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vehiculo } from '../../../../interfaces/vehiculo.interface';
import { VehiculoService } from '../../../../services/vehiculo.service';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { CupoService } from '../../../../services/cupo.service';
import { Cupo } from '../../../../interfaces/cupo.interface';
import { PostReserva } from '../../../../interfaces/post-reserva.interface';
import { FormsModule } from '@angular/forms';
import { ReservaService } from '../../../../services/reserva.service';
import { RespuestasService } from '../../../../services/respuestas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-reserva',
  imports: [RouterLink, FormsModule],
  templateUrl: './nueva-reserva.component.html',
  styles: ``
})
export default class NuevaReservaComponent implements OnInit {

  router = inject(Router);
  cupoService = inject(CupoService);
  reservaService = inject(ReservaService);
  vehiculoService = inject(VehiculoService);
  respuestasService = inject(RespuestasService);
  localstorageService = inject(LocalstorageService);

  
  cupos: Cupo[] = [];
  vehiculos: Vehiculo[] = [];
  reserva: PostReserva = {
    vehiculoId: "",
    cupoId: "",
    fechaIngresoEstipulada: null
  }

  async ngOnInit(): Promise<any> {
    
    try {
      window.scrollTo(0, 0);
    
      let id = JSON.parse(this.localstorageService.getItem('usuario-parqueadero')).id;

      const { data: listaVehiculos } = await this.vehiculoService.obtenerVhiculosPorUsuario(parseInt(id));
      const { data: listaCuposDisponibles } = await this.cupoService.obtenerCuposDisponibles();

      this.vehiculos = listaVehiculos;
      this.cupos = listaCuposDisponibles;

    }catch(error: unknown){
      alert(this.respuestasService.serverError(error));  
    }
  }

  registrarReserva = async () :Promise<void> => {
    try {

      let res = await this.reservaService.insertar(this.reserva);

      if(res.codigo == 201){ alert(`${res.mensaje}`) };

      this.router .navigate(['dashboard/cliente']);
      
    }catch(error: unknown){
      alert(this.respuestasService.serverError(error));
    }
  }
}
