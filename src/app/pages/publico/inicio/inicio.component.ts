import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styles: ``
})
export default class InicioComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
