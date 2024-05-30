import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/CatalogueComponent';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LubriCardListComponent } from './lubri-card-list/lubri-card-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductLoaderComponent } from './product-loader/product-loader.component';
import { LubriSearchComponent } from './lubri-search/lubri-search.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    LubriCardListComponent,
    ProductCardComponent,
    ProductLoaderComponent,
    LubriSearchComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
