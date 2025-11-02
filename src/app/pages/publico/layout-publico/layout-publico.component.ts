import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-layout-publico',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout-publico.component.html',
  styles: ``
})
export default class LayoutPublicoComponent {

}
