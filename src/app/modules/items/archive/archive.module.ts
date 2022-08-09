import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from './archive.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: ArchiveComponent
  }
];

@NgModule({
  declarations: [
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ]
})
export class ArchiveModule { }
