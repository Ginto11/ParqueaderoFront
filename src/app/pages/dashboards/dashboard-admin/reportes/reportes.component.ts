import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GraficaEgresosComponent } from './charts/grafica-egresos/grafica-egresos.component';
import { GraficaIngresosComponent } from './charts/grafica-ingresos/grafica-ingresos.component';
import { GraficaMetodoPagoComponent } from './charts/grafica-metodo-pago/grafica-metodo-pago.component';
import { GraficaTipoVehiculoComponent } from './charts/grafica-tipo-vehiculo/grafica-tipo-vehiculo.component';

@Component({
  selector: 'app-reportes',
  imports: [GraficaEgresosComponent, GraficaIngresosComponent, GraficaMetodoPagoComponent, GraficaTipoVehiculoComponent, RouterLink],
  templateUrl: './reportes.component.html',
  styles: ``
})
export default class ReportesComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
