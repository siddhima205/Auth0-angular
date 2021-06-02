import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';

import { AuthbuttonComponent } from './authbutton/authbutton.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthbuttonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'test-sid946.us.auth0.com',
      clientId: '0teQEpEBT9Ga2lFQ5wPxwCK7HdiJilmv'
    }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
