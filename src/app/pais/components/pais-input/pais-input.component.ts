import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import {  Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
 

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //on se pone para identificar que es un evento
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string = '';
  debouncer: Subject<string> = new Subject();//Es un observador especial

  termino: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor =>{
      this.onDebounce.emit( valor );
    })
  }

  buscar(){
    this.onEnter.emit( this.termino );
    // console.log('Hola mundo');
    // console.log(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );
    // const valor = event.target.value;
    // console.log(valor);

    // console.log(this.termino);
  }

}
