import { Component} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
 
})
export class MainPageComponent {


nuevo: Personaje = {
  nombre: 'Maestro Roshi',
  poder: 2000
}

// agregarNuevoPersonaje( arg : Personaje) {
// //debugger;
//  this.personajes.push( arg )
// }
constructor() {}
}
