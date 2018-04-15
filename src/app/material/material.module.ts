import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDemoComponent } from './material-demo/material-demo.component';
import {MatIconModule, MatButtonModule  , MatToolbarModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [MaterialDemoComponent]
})
export class MaterialModule { }
