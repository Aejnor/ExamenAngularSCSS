import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appDirectivaBoton]'
})
export class DirectivaBotonDirective {

    @Input() defaultColor: string;
    @Input() colorAsignado: String;

    constructor(private el: ElementRef) {

    }

    @HostListener('mouseenter') alEntrarElRaton() {
        this.el.nativeElement.style.backgroundColor = this.defaultColor || this.colorAsignado;
        this.el.nativeElement.style.fontSize = '20px';
        this.el.nativeElement.style.size = '25px';
    }

    @HostListener('mouseleave') alSalirElRaton() {
        this.el.nativeElement.style.backgroundColor = this.colorAsignado;
    }


    @HostListener('click') alClickar() {
        this.el.nativeElement.textContent('Ya se ha pulsado el boton');
    }
}
