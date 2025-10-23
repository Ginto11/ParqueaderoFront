import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderDashboardComponent } from '../../../../shared/header-dashboard/header-dashboard.component';
import { ReservaService } from '../../../../services/reserva.service';
import { Reserva } from '../../../../interfaces/reserva.interface';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import localeEsCo from '@angular/common/locales/es-CO';

registerLocaleData(localeEsCo);

@Component({
  selector: 'app-historial-reservas',
  imports: [RouterLink, HeaderDashboardComponent, CommonModule],
  templateUrl: './historial-reservas.component.html',
  styles: ``
})
export default class HistorialReservasComponent  implements OnInit{

  reservaService = inject(ReservaService);
  localstorageService = inject(LocalstorageService);

  reservas: Reserva[] = [];

  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);

    let id = JSON.parse(this.localstorageService.getItem('usuario-parqueadero')).id;

    const { data: listaReservas } = await this.reservaService.obtenerReservasPorUsuario(id)

    this.reservas = listaReservas;

    console.log(this.reservas)
  }

  actualizarReserva = async () :Promise<void> => {

  }

  cancelarReserva = async (id: number) :Promise<void> => {
    try{

      let confirmacion = confirm('¿Seguro que desea cancelar la reserva?');

      if(!confirmacion) return;

      await this.reservaService.cancelarReserva(id);

      alert('Reserva cancelada exitosamente.');

      window.location.reload();
    }catch(error){
      alert(`${(error as HttpErrorResponse).message}`);
    }
  }
}
