import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
              private authService: AuthService, 
              private router: Router,
              private flashMessage: FlashMessagesService 
             ) { }

  ngOnInit() {
  }

  authentication() {
    this.authService.login(this.email, this.password)
        .then((res) => {
          this.flashMessage.show("user is autheticated", {
            cssClass: "alert-success",
            timeout: 5000
          });
          this.router.navigate(['/'])
      })
        .catch((error) => {
          this.flashMessage.show(error.message, {
            cssClass: "alert-warning",
            timeout: 5000
          })
        })
  }

}
