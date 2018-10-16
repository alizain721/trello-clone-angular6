import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../../core/services/auth/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authenticationService: AuthService, private flashMessage: FlashMessagesService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
         email: ['', Validators.required],
         password: ['', Validators.required]
    })
  }

  get form_fields() {
   return this.loginForm.controls
  }

  login() {
    if (this.loginForm.invalid) {
      this.flashMessage.show('Please enter all fields', { cssClass: 'alert-danger', timeout: 2000 })
    } else if (this.authenticationService.login(this.form_fields.email.value, this.form_fields.password.value)) {
      this.flashMessage.show('Successfully logged in', { cssClass: 'alert-success', timeout: 2000 })
    } else {
      this.flashMessage.show('Authentication error', { cssClass: 'alert-danger', timeout: 2000 })
    }
  }
}
