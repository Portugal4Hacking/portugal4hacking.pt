import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClipboardModule } from 'ngx-clipboard';
import { LoaderComponent } from './screens/loader/loader.component';
import { NotfoundComponent } from './screens/notfound/notfound.component';

import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoaderComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ClipboardModule,
    SwiperModule,
    BrowserModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
