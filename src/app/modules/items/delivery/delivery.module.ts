import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { AddItemComponent } from './add-item/add-item.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

const routes: Routes = [
  {
    path: '',
    component: DeliveryComponent
  }
];

@NgModule({
  declarations: [
    DeliveryComponent,
    AddItemComponent,
    ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild(routes),
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ]
})
export class DeliveryModule { }
