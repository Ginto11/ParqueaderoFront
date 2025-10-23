import { Component, OnInit } from '@angular/core';
import { HeaderDashboardComponent } from '../../../../shared/header-dashboard/header-dashboard.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-soporte-ayuda',
  imports: [HeaderDashboardComponent, RouterLink],
  templateUrl: './soporte-ayuda.component.html',
  styles: ``
})
export default class SoporteAyudaComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);    
  }
}
