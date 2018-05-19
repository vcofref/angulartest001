import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public token;
  public currentUser;
  public projects = [];

  constructor(
    private api: ApiService,
    private storage: StorageService
  ) {
    this.currentUser = this.storage.getCurrentUser();
    this.token = this.currentUser.token;
   }

  ngOnInit() {
    this.api.getProyectos(this.token).subscribe((proyectos: any) =>{
      this.projects=proyectos.data;
      console.log(this.projects);
    }
    )};

}
