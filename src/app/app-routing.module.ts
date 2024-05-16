import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/CatalogueComponent';
import { LubriCardListComponent } from './lubri-card-list/lubri-card-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    component: CatalogueComponent
  },
  {
    path: 'home',
    component: LubriCardListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
