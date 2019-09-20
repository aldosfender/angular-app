import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../webservice.service';

@Component({
  selector: 'app-angular-cli',
  templateUrl: './angular-cli.component.html',
  styleUrls: ['./angular-cli.component.scss']
})
export class AngularCliComponent implements OnInit {

  players: string[] = ['Aldo','Alisson','Van Dijk','Robertson','Fabinho','Mane','Salah','Firmino'];

  activated: boolean = true;

  name: string;
  age: number;
  address: {
      number_street: number, 
      street: string
  };
  clubs: string[];

  val1: string = 'John Doe';
  val2: string = '28 years old';

  users = [];

  constructor(private webService: WebserviceService) { 
      this.name = 'Virgin Van Dijk';
      this.age = 28;
      this.address = {
        number_street: 4,
        street: 'Bakery Street'  
      };
      this.clubs = ['Celtic', 'Southampton'];

      this.webService.getUsers().subscribe(res => {
          console.log(res);
          this.users = res;
      });

   }

  ngOnInit() {
  }

  firstclick() {
      alert('Hello from an alert..!');
  }

  deleteclub(club) {
    for(let i = 0; i < this.clubs.length; i++) {
      if( club == this.clubs[i] ){
        this.clubs.splice(i, 1);
      }
    }
  }

  addclub(newClub){
    this.clubs.push(newClub.value);
    newClub.value = '';
    newClub.focus();
    return false;
  }

}
