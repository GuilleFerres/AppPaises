import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})

export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor( private paiseService: PaisService ) { 

  }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this.paiseService.buscarCapital( termino )
    .subscribe( (paises) =>{
      
      this.paises = paises;
      
    },(err) =>{
      this.hayError = true;
      this.paises = [];
    });
  } 

  ngOnInit(): void {
  }

}
