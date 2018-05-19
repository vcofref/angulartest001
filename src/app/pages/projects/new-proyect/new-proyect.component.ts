import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { StorageService } from '../../../services/storage/storage.service';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.scss']
})
export class NewProyectComponent implements OnInit {

  public currentUser;
  public token;

  public newProyectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });


  constructor(
    private api:ApiService,
    private storage:StorageService,
    private router:Router

  ) {
    this.currentUser = this.storage.getCurrentUser();
    this.token = this.currentUser.token;
  }

  ngOnInit() {
  }

  public nuevoPoryecto(form){
    this.api.crearProyecto(this.token, form).subscribe(()=>{
      this.router.navigateByUrl('/dashboard/proyectos');
    });
    // console.log(form);
  }
}
