import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: StoresComponent
  }
];

@NgModule({
  declarations: [
    StoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ]
})
export class StoresModule { }
