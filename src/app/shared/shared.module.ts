import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { CharacterDirective } from './directives/character.directive';



@NgModule({
  declarations: [LayoutComponent, CharacterDirective],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports: [LayoutComponent, CharacterDirective]
})
export class SharedModule { }
