import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tasklistRouting } from './tasklist.routes';
import { TasklistPageComponent } from './components/tasklist-page/tasklist-page.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TasklistSectionComponent } from './components/tasklist-section/tasklist-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InPastPipe } from './pipes/in-past.pipe';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    tasklistRouting
  ],
  declarations: [TasklistPageComponent, TasklistComponent, TasklistSectionComponent, TaskComponent, InPastPipe]
})
export class TasklistModule { }
