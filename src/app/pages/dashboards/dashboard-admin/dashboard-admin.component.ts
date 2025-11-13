import { AfterViewChecked, AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
import { UsuarioLogueado } from '../../../interfaces/usuario-logueado.interface';
import { RouterLink } from '@angular/router';
import { CupoService } from '../../../services/cupo.service';
import { ReservaService } from '../../../services/reserva.service';
import { RespuestasService } from '../../../services/respuestas.service';
import { CommonModule } from '@angular/common';
import { Chart, ChartData, ChartType } from 'chart.js/auto';
import ApexCharts from 'apexcharts';
import { TransaccionesService } from '../../../services/transacciones.service';

@Component({
  selector: 'app-dashboard-admin',
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard-admin.component.html',
  styles: ``
})
export default class DashboardAdminComponent implements OnInit {

  @Input() usuario!: UsuarioLogueado;

  private cupoService = inject(CupoService);
  private reservasService = inject(ReservaService);
  private respuestasService = inject(RespuestasService);
  private transaccionService = inject(TransaccionesService);
  
  cantidadCuposDisponibles!: number;
  ingresosDiarios!: number;
  cantidadReservasActivas!: number;
  cantidadVehiculosHoy!: number;
  ultimasReservas!: any;

  chartLines!: Chart;




  async ngOnInit(): Promise<void> {

    try {

      await this.obtenerDatos();
      this.crearGraficaLine();

    } catch (error) {
      this.respuestasService.serverError(error);
    }
  }

  obtenerDatos = async (): Promise<void> => {
    const { data: cuposDisponibles } = await this.cupoService.obtenerCuposDisponibles();
    this.cantidadCuposDisponibles = cuposDisponibles.length;

    const { data: reservasActivas } = await this.reservasService.obtenerTodasLasReservasActivas();
    this.cantidadReservasActivas = reservasActivas.length;

    const { data: cuposOcupados } = await this.cupoService.obtenerVehiculosTotalesDelParqueadero();
    this.cantidadVehiculosHoy = cuposOcupados;

    const { data: ultimasR } = await this.reservasService.obtenerUltimasReservas();

    this.ultimasReservas = ultimasR.map((reserva: any) => {
    const partes = reserva.nombreUsuario.split(' ');
    const nombreCorto = `${partes[0]} ${partes[1] ?? ''}`.trim(); // Primer nombre y apellido
    return { ...reserva, nombreUsuario: nombreCorto };
  });

    const { data: ingresosDiarios } = await this.transaccionService.obtenerIngresosDiarios();
    this.ingresosDiarios = ingresosDiarios.costo;
  }

  crearGraficaLine = (): void => {
    this.chartLines = new Chart('chart-lines', {
      type: 'line' as ChartType,
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        datasets: [
          {
            label: '2024',
            fill: true,
            data: [500000, 600000, 1200000, 600000, 3400000, 7000000, 1700000, 2300000, 1000000, 3000000, 4300000], 
          },
          {
            label: '2025',
            fill: true,
            data: [1000000, 700000, 1200000, 2000000, 500000, 1700000, 2200000, 1900000, 3000000, 1500000, 2500000], 
          }
        ],
      },
    })
  }


}
