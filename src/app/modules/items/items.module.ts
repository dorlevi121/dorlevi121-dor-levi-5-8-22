import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: '',
        redirectTo: 'delivery',
        pathMatch: 'full'
      },
      {
        path: 'delivery',
        loadChildren: () => import('./delivery/delivery.module').then(mod => mod.DeliveryModule)
      },
      {
        path: 'archive',
        loadChildren: () => import('./archive/archive.module').then(mod => mod.ArchiveModule)
      }
    ]
  },
];

@NgModule({
  declarations: [

    ItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ItemsModule { }
