import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AuthGuard } from './common/auth.guard';
import { Joke } from './common/joke';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ChuckSaysComponent } from './chuck-says/chuck-says.component';
import { SidebarModule } from 'ng-sidebar';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { AlertService } from './_services/alert.service';
import { AlertComponent } from './alert/alert.component';
import { ChuckJokeService } from './_services/chuck-joke.service';

import { fakeBackendProvider } from './common/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SignInComponent,
    ChuckSaysComponent,
    SignUpComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SidebarModule,
    AlertModule.forRoot()
  ],
  providers: [
    AuthGuard,
    Joke,
    AuthenticationService,
    AlertService,
    UserService,
    ChuckJokeService,
    // providers used to create fake backend
    //fakeBackendProvider,
    //MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
