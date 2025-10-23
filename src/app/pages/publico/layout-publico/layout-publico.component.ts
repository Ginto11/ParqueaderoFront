import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-publico',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './layout-publico.component.html',
  styles: ``
})
export default class LayoutPublicoComponent {

}
