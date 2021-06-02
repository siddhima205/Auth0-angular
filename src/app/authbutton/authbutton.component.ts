import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-authbutton',
  templateUrl: './authbutton.component.html',
  styleUrls: ['./authbutton.component.css']
})
export class AuthbuttonComponent {

  constructor(public auth: AuthService) {}

}
