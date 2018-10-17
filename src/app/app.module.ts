import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventService } from './services/event.service';


const appRoutes: Routes = [

  { path: 'accueil', canActivate: [AuthGuard], component: AccueilComponent },
  { path: 'addevent', canActivate: [AuthGuard] , component: AddEventComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    AccueilComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
     AuthService,
     AuthGuard,
     EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
