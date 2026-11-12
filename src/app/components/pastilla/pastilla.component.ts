import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pastilla',
    templateUrl: './pastilla.component.html',
    styleUrls: ['./pastilla.component.css'],
})
export class PastillaComponent {
    @Input() color: 'verde' | 'blanco' = 'verde';
}
