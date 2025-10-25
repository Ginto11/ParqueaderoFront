import { Component } from '@angular/core';
import { HeaderDashboardComponent } from '../../../shared/header-dashboard/header-dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [HeaderDashboardComponent, RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
  styles: ``
})
export class DashboardLayoutComponent {

}
