import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'items',
    // children: [
    //   {
    //     path: 'items',
    //     loadChildren: () => import('./modules/items/items.module').then(mod => mod.ItemsModule),
    //   },
    //   {
    //     path: 'stores',
    //     loadChildren: () => import('./modules/stores/stores.module').then(mod => mod.StoresModule),
    //   }
    // ]
  },
  {
    path: 'items',
    loadChildren: () => import('./modules/items/items.module').then(mod => mod.ItemsModule),
  },
  {
    path: 'stores',
    loadChildren: () => import('./modules/stores/stores.module').then(mod => mod.StoresModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
