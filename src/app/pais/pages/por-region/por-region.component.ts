import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px
    }
  `
  ]
})
export class PorRegionComponent {
  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];
  regiones: string[] = ['EU', 'EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
 
// https://restcountries.com/v2/regionalbloc/{regionalbloc}
// https://restcountries.com/v2/regionalbloc/eu

  regionActiva: string = '';

  constructor(private paisesService: PaisService) { }


  getClaseCSS( region: string ): string{
    return (region === this.regionActiva) 
    ? 'btn btn-primary'
    :'btn btn-outline-primary';
  }

  activarRegion(region:string){
    if( region === this.regionActiva ){ return;}
    this.regionActiva = region;
    this.paises =[];
    this.paisesService.buscarRegion( region )
    .subscribe( paises =>{
      
      this.paises = paises;
      console.log( paises );
      
    },(err) =>{
      this.hayError = true;
      this.paises = [];
    });
  }


}
