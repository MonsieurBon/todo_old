import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  declarations: [AuthLayoutComponent, MainLayoutComponent, LoadingModalComponent],
  entryComponents: [LoadingModalComponent]
})
export class LayoutModule { }
