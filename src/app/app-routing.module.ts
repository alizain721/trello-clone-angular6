import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationRoutingModule} from './authentication/authentication-routing.module'
import {FooterComponent} from './shared/footer/footer.component';


const routes: Routes = [
    {path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
