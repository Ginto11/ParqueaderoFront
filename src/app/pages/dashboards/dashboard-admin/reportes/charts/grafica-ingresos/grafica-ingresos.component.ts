import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-grafica-ingresos',
  imports: [],
  templateUrl: './grafica-ingresos.component.html',
  styles: ``
})
export class GraficaIngresosComponent implements OnInit {

  chart!: Chart;

  private meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  ngOnInit(): void {
    this.chart = new Chart('chart-ingresos', {
      type: 'line',
      data: {
        labels: this.meses, // ['Enero', 'Febrero', ..., 'Diciembre']
        datasets: [
          {
            label: 'Ingresos 2024',
            data: [2200000, 2500000, 2300000, 2800000, 3200000, 2900000, 3100000, 3300000, 3000000, 3400000, 3600000, 3800000],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true,
            tension: 0.3,
          },
          {
            label: 'Ingresos 2025',
            data: [2600000, 2700000, 3000000, 3200000, 3400000, 3100000, 3500000, 3700000, 3900000, 4100000, 4300000, 4500000],
            borderColor: '#FFB300',
            backgroundColor: 'rgba(255, 179, 0, 0.2)',
            fill: true,
            tension: 0.3,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Ingresos Mensuales 2024 - 2025',
            font: { size: 18 }
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Monto ($)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Meses'
            }
          }
        }
      }
    });
  }

}
