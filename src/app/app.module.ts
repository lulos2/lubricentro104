import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/CatalogueComponent';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LubriCardListComponent } from './lubri-card-list/lubri-card-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductLoaderComponent } from './product-loader/product-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    LubriCardListComponent,
    ProductCardComponent,
    ProductLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
