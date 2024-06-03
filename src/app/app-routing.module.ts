import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/CatalogueComponent';
import { LubriCardListComponent } from './lubri-card-list/lubri-card-list.component';
import { ProductLoaderComponent } from './product-loader/product-loader.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    component: CatalogueComponent
  },
  {
    path: 'home',
    component: LubriCardListComponent
  },
  {
    path: 'loadProduct',
    component: ProductLoaderComponent
  },
  {
    path: 'products/:type', component: LubriCardListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
