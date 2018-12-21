import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  exports: [
    MatNativeDateModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class DemoMaterialModule { }
