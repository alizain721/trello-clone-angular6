import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentsRoutingModule } from './components-routing.module'
import { ReactiveFormsModule} from '@angular/forms'
import { BoardsComponent } from './boards/boards.component'
import { HistoryComponent } from './history/history.component'
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    TextareaAutosizeModule
  ],
  declarations: [
    BoardsComponent,
    HistoryComponent,
  ]
})
export class ComponentsModule { }
