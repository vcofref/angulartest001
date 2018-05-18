import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage/storage.service';
import { ApiService } from './services/api/api.service';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    StorageService
  ],
  bootstrap: [LoginComponent]
})
export class AppModule { }
