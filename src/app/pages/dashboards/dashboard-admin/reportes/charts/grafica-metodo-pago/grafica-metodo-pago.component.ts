import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafica-metodo-pago',
  imports: [],
  templateUrl: './grafica-metodo-pago.component.html',
  styles: ``
})
export class GraficaMetodoPagoComponent implements OnInit {

  chart!: Chart;

  ngOnInit(): void {
    this.chart = new Chart('chart-metodos', {
      type: 'polarArea',
      data: {
        labels: ['Efectivo', 'Tarjeta de crédito', 'Tarjeta débito', 'Transferencia', 'App móvil'],
        datasets: [{
          label: 'Métodos de Pago',
          data: [4200000, 2500000, 3100000, 1800000, 900000],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',   // Efectivo
            'rgba(54, 162, 235, 0.6)',   // Tarjeta crédito
            'rgba(255, 206, 86, 0.6)',   // Tarjeta débito
            'rgba(75, 192, 192, 0.6)',   // Transferencia
            'rgba(153, 102, 255, 0.6)',  // App móvil
          ],
          borderColor: '#fff',
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Distribución de Métodos de Pago',
            font: { size: 18 }
          },
          legend: {
            position: 'top',
            labels: {
              boxWidth: 20
            }
          },
        },
        scales: {
          r: {
            startAngle: 0,
            ticks: {
              display: true,
            }
          }
        }
      }
    });
  }

}
