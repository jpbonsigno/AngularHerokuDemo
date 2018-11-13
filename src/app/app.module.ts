import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Route } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { DataService } from './services/data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.imports';

import { FlexLayoutModule } from '@angular/flex-layout';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

import { HellodivComponent } from './hellodiv/hellodiv.component';
import { MensajeDivComponent } from './mensaje-div/mensaje-div.component';

import { FireproductsComponent } from './components/fireproducts/fireproducts.component';
import { ListComponent } from './components/fireproducts/list/list.component';
import { ProductComponent } from './components/fireproducts/product/product.component';

import { ProductService } from './services/product.service';

import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'fireproducts',
    component: FireproductsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HellodivComponent,
    MensajeDivComponent,
    LandingComponent,
    AboutComponent,
    FireproductsComponent,
    ListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    DataService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
