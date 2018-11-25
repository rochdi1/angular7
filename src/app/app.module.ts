import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ShowClientComponent } from './components/show-client/show-client.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

//Import firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';
import { ResumePipe } from './resume.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListClientsComponent,
    AddClientComponent,
    EditClientComponent,
    ShowClientComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ResumePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
