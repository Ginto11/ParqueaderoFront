import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-grafica-egresos',
  imports: [],
  templateUrl: './grafica-egresos.component.html',
  styles: ``
})
export class GraficaEgresosComponent implements OnInit {

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
    this.chart = new Chart('chart-egresos', {
      type: 'line',
      data: {
        labels: this.meses,
        datasets: [
          {
            label: 'Egresos 2024',
            data: [1200000, 950000, 1300000, 1100000, 1400000, 1000000, 1250000, 1350000, 1500000, 1450000, 1600000, 1550000],
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.3,
          },
          {
            label: 'Egresos 2025',
            data: [1000000, 1150000, 1200000, 950000, 1050000, 1250000, 1300000, 1400000, 1550000, 1600000, 1700000, 1650000],
            borderColor: '#36A2EB',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
            text: 'Egresos Mensuales 2024 -2025',
            font: { size: 18 }
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Monto ($)',
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
    })
  }
}
