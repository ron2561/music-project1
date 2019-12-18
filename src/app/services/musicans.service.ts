import { Injectable, EventEmitter } from '@angular/core';
import { Musician } from '../models/musician.model';

@Injectable({
  providedIn: 'root'
})
export class MusicansService {

  musicianArrayChanged = new EventEmitter<Musician[]>();
  newmusicianArray: Musician[] = [

];
 constructor() { }
AddMusician(newmusician: Musician) {
this.newmusicianArray.push(newmusician)
this.musicianArrayChanged.emit(this.newmusicianArray.slice());
}

getMusicians() {
 return this.newmusicianArray.slice();
}
}
