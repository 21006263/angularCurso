import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  heroe: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Superman'];
  heroeBorrado: string = '';
    borrarHeroe() {
   this.heroeBorrado =  this.heroe.shift() || '';
   
   
  }

}
