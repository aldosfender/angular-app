import { Component } from '@angular/core';

@Component({
    selector: 'angular-app',
    templateUrl: './angular-app.component.html',
    styleUrls: ['./angular-app.component.scss']
})

export class AngularappComponent {
    info: string = 'Info from Angular-app Component';
    title: string = 'This is the title from first component';
}