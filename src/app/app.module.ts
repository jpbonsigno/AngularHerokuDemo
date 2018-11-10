import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Route } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

import { HellodivComponent } from './hellodiv/hellodiv.component';
import { MensajeDivComponent } from './mensaje-div/mensaje-div.component';


const routes: Route[] = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HellodivComponent,
    MensajeDivComponent,
    LandingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
