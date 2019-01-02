import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListapeliculasComponent } from './listapeliculas/listapeliculas.component';
import { ServiciopeliculasService } from './serviciopeliculas.service';
import { CabezeraComponent } from './cabezera/cabezera.component';

@NgModule({
  declarations: [
    AppComponent,
    ListapeliculasComponent,
    CabezeraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServiciopeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
