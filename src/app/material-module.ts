import {ScrollingModule} from '@angular/cdk/scrolling';
import {NgModule} from '@angular/core';
import {
  MatInputModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatInputModule,
    MatSelectModule,
    ScrollingModule,
  ]
})
export class DemoMaterialModule {}
