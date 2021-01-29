import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports: [LayoutComponent]
})
export class SharedModule { }
