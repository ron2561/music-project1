import { Component, ElementRef,
  ViewChild,
  OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Project} from '../models/project.model';
import { ApiServicesService } from '../services/ApiServices.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public serviceConnection: ApiServicesService) {}
  arraytest: Project[]
  // creating over here viewchild to fetch the value from the elements of the input's project
  @ViewChild('firstNameInputRef') firstNameInputRef: ElementRef;
  @ViewChild('lastNameInputRef') lastNameInputRef: ElementRef;
  @ViewChild('projectNameInputRef') projectNameInputRef: ElementRef;
  @ViewChild('DescriptionInputRef') DescriptionInputRef: ElementRef;
  @ViewChild('idInputRef') idInputRef: ElementRef;

  ngOnInit() {

  }

  pushProject() {
    const clientName = this.firstNameInputRef.nativeElement.value;
    const clientLastName = this.lastNameInputRef.nativeElement.value;
    const projectName = this.projectNameInputRef.nativeElement.value;
    const description = this.DescriptionInputRef.nativeElement.value;
    const id = this.idInputRef.nativeElement.value;
    const newProject = new Project(projectName, clientName, clientLastName, description, id);
    this.serviceConnection.AddProject(newProject);

    this.firstNameInputRef.nativeElement.value = '';
    this.lastNameInputRef.nativeElement.value = '';
    this.projectNameInputRef.nativeElement.value = '';
    this.DescriptionInputRef.nativeElement.value = '';
  }
}
