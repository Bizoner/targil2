import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { SecurityRouteService } from 'services/security-route.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataWindowComponent } from './data-window/data-window.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [SecurityRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
