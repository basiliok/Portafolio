import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NgOptimizedImage } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { PastillaComponent } from './components/pastilla/pastilla.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';

@NgModule({
  declarations: [AppComponent, ProyectoComponent, LogoComponent, TecnologiaComponent, PastillaComponent, PublicacionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgOptimizedImage], // <-- 1. Optimizacion de imagenes
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
