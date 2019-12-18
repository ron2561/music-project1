import { Component, OnInit } from '@angular/core';
import { Musician } from '../../models/musician.model';
import { MusicansService } from '../../services/musicans.service';
@Component({
  selector: 'app-musician-table',
  templateUrl: './musician-table.component.html',
  styleUrls: ['./musician-table.component.scss']
})
export class MusicianTableComponent implements OnInit {

  p = 1;
  arrayMusicianTest: Musician[]
  constructor(public musicianConnection: MusicansService) { }

  ngOnInit() {
           // over here we fetch the array of musicians for showing them in html page.
           this.arrayMusicianTest = this.musicianConnection.getMusicians();
           this.musicianConnection.musicianArrayChanged
           .subscribe(
             (musiciantest: Musician[]) => {
               this.arrayMusicianTest = musiciantest;
             }
           );
  }
}
