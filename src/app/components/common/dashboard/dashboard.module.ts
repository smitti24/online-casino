import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [ CommonModule ],
  exports: [
    DashboardComponent
  ],
  providers: [],
})
export class DashboardModule {}
