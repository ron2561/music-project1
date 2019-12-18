import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Musician } from '../models/musician.model';
import { MusicansService } from '../services/musicans.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

@ViewChild('nameInputRef') nameInputRef: ElementRef
@ViewChild('lastNameInputRef') lastNameInputRef: ElementRef
@ViewChild('idInputRef') idInputRef: ElementRef
@ViewChild('instrumentInputRef') instrumentInputRef: ElementRef
  constructor( private musicanService: MusicansService) { }



   pushMusician() {
    const id = this.idInputRef.nativeElement.value;
    const instrument = this.instrumentInputRef.nativeElement.value;
    const musicanFirstName = this.nameInputRef.nativeElement.value;
   const musicianLastName = this.lastNameInputRef.nativeElement.value;
   const  mymusician: Musician = new Musician(id, instrument, musicanFirstName, musicianLastName)
    this.musicanService.AddMusician(mymusician);
    // down here we bring the input lines back to empty after sumbiting the new musician
   this.idInputRef.nativeElement.value = ' ';
    this.instrumentInputRef.nativeElement.value = ' ';
    this.nameInputRef.nativeElement.value = ' ';
   this.lastNameInputRef.nativeElement.value = ' ';
   // ends here
  }

  ngOnInit() {
  }
}
