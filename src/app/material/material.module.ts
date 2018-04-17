import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDemoComponent } from './material-demo/material-demo.component';
import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
  } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  declarations: [MaterialDemoComponent]
})
export class MaterialModule { }
