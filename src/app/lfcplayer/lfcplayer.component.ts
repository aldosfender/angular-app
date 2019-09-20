import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lfcplayer',
  templateUrl: './lfcplayer.component.html',
  styleUrls: ['./lfcplayer.component.scss']
})

export class LfcplayerComponent implements OnInit {
  @Input() liverpoolPlayer;

  constructor() { }

  ngOnInit() {
  }

}
