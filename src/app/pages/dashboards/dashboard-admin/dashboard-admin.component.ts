import { Component, Input } from '@angular/core';
import { UsuarioLogueado } from '../../../interfaces/usuario-logueado.interface';
import { HeaderDashboardComponent } from '../../../shared/header-dashboard/header-dashboard.component';

@Component({
  selector: 'app-dashboard-admin',
  imports: [HeaderDashboardComponent],
  templateUrl: './dashboard-admin.component.html',
  styles: ``
})
export default class DashboardAdminComponent {

  @Input() usuario!: UsuarioLogueado;


  

}
