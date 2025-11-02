import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styles: ``
})
export default class InicioComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
