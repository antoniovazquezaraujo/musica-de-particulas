import { Component } from '@angular/core';
import { Instrument } from './model/instrument';
import { SongPlayer } from './model/song.player';
import { Command, CommandType } from "./model/command";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'song-player';
 
  constructor(){
 
  }

}
