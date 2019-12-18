import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss']
})
export class CalanderComponent implements OnInit {

  public minDate: Date = new Date ('30/10/2018');
  public maxDate: Date = new Date ('12/01/2022');
  public currentDate: Date = new Date ('30/11/2019');

  constructor() { }

  saveSession() {

  }

  sessionList() {

  }

  ngOnInit() {
  }
}
