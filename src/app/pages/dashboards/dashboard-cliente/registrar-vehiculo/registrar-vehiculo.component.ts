import { Component, inject, OnInit } from '@angular/core';
import { HeaderDashboardComponent } from '../../../../shared/header-dashboard/header-dashboard.component';
import { Router, RouterLink } from '@angular/router';
import { PostVehiculo } from '../../../../interfaces/post-vehiculo.interface';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { VehiculoService } from '../../../../services/vehiculo.service';
import { RespuestasService } from '../../../../services/respuestas.service';

@Component({
  selector: 'app-registrar-vehiculo',
  imports: [HeaderDashboardComponent, RouterLink, FormsModule],
  templateUrl: './registrar-vehiculo.component.html',
  styles: ``
})
export default class RegistrarVehiculoComponent implements OnInit {
  
  private router = inject(Router);
  private respuestasService = inject(RespuestasService);
  private localstorageService = inject(LocalstorageService);
  private vehiculoService = inject(VehiculoService);
  

  vehiculo: PostVehiculo = {
    placa: null,
    usuarioId: null,
    cilindraje: null
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  registrarVehiculo = async ():Promise<void>  => {
    try {

      this.vehiculo.usuarioId = JSON.parse(this.localstorageService.getItem('usuario-parqueadero')).id;
      let res = await this.vehiculoService.registrar(this.vehiculo);

      if(res.codigo == 201) { alert(res.mensaje); this.limpiarCampos(); }

      this.router.navigate(['dashboard-cliente']);

    }catch(error: unknown){
      alert(this.respuestasService.serverError(error));
    }
  }

  limpiarCampos = () => {
    Object.keys(this.vehiculo).forEach(key => {
      this.vehiculo[key as keyof PostVehiculo] = null;
    })
  }
}
