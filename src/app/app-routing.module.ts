import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationRoutingModule} from './authentication/authentication-routing.module'
import {ComponentsRoutingModule} from './components/components-routing.module'
import {FooterComponent} from './shared/footer/footer.component';


const routes: Routes = [
    {path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'},
    {path: 'board', loadChildren: './components/components.module#ComponentsModule'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]

})
export class AppRoutingModule {
}
