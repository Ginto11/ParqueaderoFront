import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-grafica-tipo-vehiculo',
  imports: [],
  templateUrl: './grafica-tipo-vehiculo.component.html',
  styles: ``
})
export class GraficaTipoVehiculoComponent implements OnInit {

  chart!: Chart;

  ngOnInit(): void {
    this.chart = new Chart('chart-vehiculos', {
      type: 'radar',
      data: {
        labels: [
          'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ],
        datasets: [
          {
            label: 'Motos 2024',
            data: [80, 95, 100, 90, 120, 110, 130, 125, 100, 140, 150, 160],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
          },
          {
            label: 'Carros 2024',
            data: [70, 65, 80, 75, 90, 85, 95, 100, 105, 110, 120, 125],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Camionetas 2024',
            data: [40, 35, 50, 55, 45, 60, 70, 65, 75, 80, 85, 90],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgb(255, 206, 86)',
            pointBackgroundColor: 'rgb(255, 206, 86)',
          },
          {
            label: 'Bicicletas 2025',
            data: [60, 70, 85, 80, 75, 90, 100, 110, 105, 95, 120, 130],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            pointBackgroundColor: 'rgb(75, 192, 192)',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            angleLines: { color: '#ddd' },
            grid: { color: '#ccc' },
            pointLabels: { color: '#333', font: { size: 13 } },
            ticks: { color: '#666', stepSize: 20 }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Comparativo de Tipos de Vehículos por Mes (2024-2025)',
            font: { size: 16 }
          },
          legend: {
            position: 'top',
            labels: {
              boxWidth: 20,
            }
          }
        }
      }
    });
  }
}
