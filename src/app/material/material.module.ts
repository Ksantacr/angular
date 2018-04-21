import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDemoComponent } from './material-demo/material-demo.component';
import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatInputModule
  } from '@angular/material';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule
    
  ],
  declarations: [MaterialDemoComponent, MaterialButtonComponent, MaterialInputComponent]
})
export class MaterialModule { }
