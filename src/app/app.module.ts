import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { IdeaComponent } from './idea/idea.component';
import { DirectivaBotonDirective } from './directivas/directiva-boton.directive';


@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    IdeaComponent,
    DirectivaBotonDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
