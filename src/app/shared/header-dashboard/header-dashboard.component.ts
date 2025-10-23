import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import { UsuarioLogueado } from '../../interfaces/usuario-logueado.interface';

@Component({
  selector: 'app-header-dashboard',
  imports: [RouterLink],
  templateUrl: './header-dashboard.component.html',
  styles: ``
})
export class HeaderDashboardComponent implements OnInit{
  
  private router = inject(Router);
  private localstorageService = inject(LocalstorageService);
  
  usuario!: UsuarioLogueado;
  
  salir = () => {
    this.localstorageService.removerItem('usuario-parqueadero');
    this.router.navigate(['/ingresar'])
  }
  
  ngOnInit(): void {
    this.usuario = JSON.parse(this.localstorageService.getItem('usuario-parqueadero'));
  }
}
