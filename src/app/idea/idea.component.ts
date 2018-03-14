import {Component, Input, OnInit} from '@angular/core';
import {Idea} from '../idea';

@Component({
    selector: 'app-idea',
    templateUrl: './idea.component.html',
    styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

    // idea = new Idea(1, 'Julio', 'Terror', 'Joer, que tension', '2', 'test');

    @Input() ideas2: Idea;

    getClass(categoria) {
        switch (categoria) {
            case 'Terror':
                return 'terror';
            case 'Aventura':
                return 'aventuras';
            case 'Ciencia-Ficcion':
                return 'cienfic';
            case 'Romantica':
                return 'romantica';
            case 'Comedia':
                return 'comedia';
        }
    }


    ngOnInit(): void {
    }
}
