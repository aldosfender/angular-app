import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-cli',
  templateUrl: './angular-cli.component.html',
  styleUrls: ['./angular-cli.component.scss']
})
export class AngularCliComponent implements OnInit {

  title: string = 'This is the header from cli component';
  info: string = 'This is the info from cli component';

  constructor() { }

  ngOnInit() {
  }

}
