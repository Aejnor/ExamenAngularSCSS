///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, Output} from '@angular/core';
import {Idea, IDEAPELICULAS} from '../idea';

class EventEmitter {
}

@Component({
    selector: 'app-peliculas',
    templateUrl: './peliculas.component.html',
    styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

    ideas2 = IDEAPELICULAS;

}
