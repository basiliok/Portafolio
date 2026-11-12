import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-publicacion',
    templateUrl: './publicacion.component.html',
    styleUrls: ['./publicacion.component.css'],
})
export class PublicacionComponent {
    @Input() link: string;
    @Input() image: string;
    @Input() title: string;
    @Input() first_detail: string;
    @Input() second_detail: string;
}
