import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ApiServicesService } from '../../services/ApiServices.service';
@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {
  p:number=1;
  arraytest:Project[]
  constructor(public serviceConnection : ApiServicesService) { }

  ngOnInit() {
       //over here we fetch the array of projects for showing them in html page.
       this.arraytest=this.serviceConnection.getProjects();
       this.serviceConnection.projectsArrayChanged
         .subscribe(
           (arraytesting: Project[]) => {
             this.arraytest =arraytesting ;
           }
         );
         //ends here
  }

}
