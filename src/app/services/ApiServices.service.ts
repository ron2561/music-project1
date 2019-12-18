import { Injectable } from '@angular/core';
import {Project} from '../models/project.model'
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
   projectsArrayChanged = new EventEmitter<Project[]>();
   newproject: Project[] = [

];
  constructor() { }
AddProject(newproject :Project){
this.newproject.push(newproject)
this.projectsArrayChanged.emit(this.newproject.slice());
}

getProjects() {
  return this.newproject.slice();
}
}


/*ingredientsChanged = new EventEmitter<Ingredient[]>();
private ingredients: Ingredient[] = [
  new Ingredient('Apples', 5),
  new Ingredient('Tomatoes', 10),
];*/