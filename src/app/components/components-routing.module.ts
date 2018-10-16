import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './boards/boards.component'

const componentRoutes: Routes = [
  {path: ':id', component: BoardsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(componentRoutes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
