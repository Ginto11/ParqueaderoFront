import { Component, inject} from '@angular/core';
import { HeaderDashboardComponent } from '../../../shared/header-dashboard/header-dashboard.component';
import { RouterLink } from '@angular/router';
import { LocalstorageService } from '../../../services/localstorage.service';
import { RespuestasService } from '../../../services/respuestas.service';
import { Reserva } from '../../../interfaces/reserva.interface';
import { ReservaService } from '../../../services/reserva.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-cliente',
  imports: [HeaderDashboardComponent, RouterLink, CommonModule],
  templateUrl: './dashboard-cliente.component.html',
  styles: ``
})
export default class DashboardClienteComponent {

  reservasActivas: Reserva[] = [];
  historialReservas: Reserva[] = [];

  isRegistrarVehiculo = false;

  private reservaService = inject(ReservaService);
  private respuestasService = inject(RespuestasService);
  private localstorageService = inject(LocalstorageService);

  usuarioLogueado = JSON.parse(this.localstorageService.getItem('usuario-parqueadero'));

  visualizarPanelRegistroVehiculo = () => this.isRegistrarVehiculo = true; 

  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);

    try {
      const { data: listaReservasActivas } = await this.reservaService.obtenerReservasActivasPorUsuario(this.usuarioLogueado.id);
      const { data: historialReservas } = await this.reservaService.obtenerReservasMasRecientesPorUsuario(this.usuarioLogueado.id);

      this.reservasActivas = listaReservasActivas;
      this.historialReservas = historialReservas;
      
    }catch(error: unknown){
      alert(this.respuestasService.serverError(error));
    }
  }


  cancelarReserva = async (id: number) :Promise<void> => {
    try{

      let confirmacion = confirm('¿Seguro que desea cancelar la reserva?');

      if(!confirmacion) return;

      await this.reservaService.cancelarReserva(id);

      alert('Reserva cancelada exitosamente.');

      window.location.reload();

    }catch(error){
        alert(this.respuestasService.serverError(error));
    }
  }
}
