import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Soporte } from '../../../../interfaces/post-soporte.interface';
import { FormsModule } from '@angular/forms';
import { SoporteService } from '../../../../services/soporte.service';
import { RespuestasService } from '../../../../services/respuestas.service';
import { LocalstorageService } from '../../../../services/localstorage.service';

@Component({
  selector: 'app-soporte-ayuda',
  imports: [RouterLink, FormsModule],
  templateUrl: './soporte-ayuda.component.html',
  styles: ``
})
export default class SoporteAyudaComponent implements OnInit {

  private router = inject(Router);
  private localstorageService = inject(LocalstorageService);
  private soporteService = inject(SoporteService);
  private respuestasService = inject(RespuestasService);

  isRegistrando = false;
 
  soporte: Soporte = {
    asunto: null,
    descripcion: null,
    usuarioId: null
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);    
  }

  enviarSolicitud = async () : Promise<void> => {
    try {

      this.soporte.usuarioId = JSON.parse(this.localstorageService.getItem('usuario-parqueadero')).id;

      let res = await this.soporteService.insertar(this.soporte);

      if(res.codigo == 201){ alert('Registro exitoso. Espera que te contacten.') };

      this.router.navigate(['dashboard/cliente'])

    }catch(error){
      alert(this.respuestasService.serverError(error));
    }
  }
}
