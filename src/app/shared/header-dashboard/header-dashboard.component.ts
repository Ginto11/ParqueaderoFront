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
  
  nombreUsuario = '';
  
  salir = () => {
    this.localstorageService.removerItem('usuario-parqueadero');
    this.router.navigate(['/ingresar'])
  }
  
  ngOnInit(): void {
    let usuario = JSON.parse(this.localstorageService.getItem('usuario-parqueadero'));
    let usuarioNombresApellidos = usuario.nombreCompleto.split(' ');
    this.nombreUsuario = `${usuarioNombresApellidos[0]} ${usuarioNombresApellidos[2]}`;
  }
}
