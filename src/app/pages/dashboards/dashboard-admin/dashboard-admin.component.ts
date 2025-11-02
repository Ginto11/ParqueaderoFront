import { Component, inject, Input, OnInit } from '@angular/core';
import { UsuarioLogueado } from '../../../interfaces/usuario-logueado.interface';
import { RouterLink } from '@angular/router';
import { CupoService } from '../../../services/cupo.service';
import { ReservaService } from '../../../services/reserva.service';

@Component({
  selector: 'app-dashboard-admin',
  imports: [RouterLink],
  templateUrl: './dashboard-admin.component.html',
  styles: ``
})
export default class DashboardAdminComponent implements OnInit {

  @Input() usuario!: UsuarioLogueado;

  private cupoService = inject(CupoService);
  private reservasService = inject(ReservaService);

  cantidadCuposDisponibles: number | null = null;
  cantidadReservasActivas: number | null = null;
  cantidadVehiculosHoy: number | null = null;
  
  async ngOnInit(): Promise<void> {
    


  }


}
