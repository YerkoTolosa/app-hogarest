import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMascotaPage } from './lista-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMascotaPageRoutingModule {}
