import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage/storage.service';
import { ApiService } from './services/api/api.service';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UsersComponent } from './pages/users/users.component';
import { EditProyectComponent } from './pages/projects/edit-proyect/edit-proyect.component';
import { NewProyectComponent } from './pages/projects/new-proyect/new-proyect.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NotFoundComponent,
    SidebarComponent,
    DashboardComponent,
    ResumenComponent,
    ProjectsComponent,
    UsersComponent,
    EditProyectComponent,
    NewProyectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'ingresar', pathMatch:'full'},
      {path:'ingresar', component: LoginComponent},
      {path:'404', component:NotFoundComponent},
      {path:'dashboard', component:DashboardComponent,
    children:[
      {path:'', redirectTo:'resumen', pathMatch:'full'},
      {path:'resumen', component:ResumenComponent},
      {path:'proyectos', component:ProjectsComponent},
      {path:'proyectos/editar/:id', component:EditProyectComponent},
      {path:'proyectos/nuevo', component:NewProyectComponent},
      {path:'usuarios', component:UsersComponent}
    ]}
    ])
  ],
  providers: [
    ApiService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
