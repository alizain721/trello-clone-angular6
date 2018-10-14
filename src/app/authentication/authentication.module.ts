import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthenticationRoutingModule } from './authentication-routing.module'
import { LoginComponent} from './login/login.component'
import { ReactiveFormsModule} from '@angular/forms'
import { FlashMessagesModule } from 'angular2-flash-messages'
@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
