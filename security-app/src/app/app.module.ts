import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {SecurityRouteService} from 'services/security-route.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataWindowComponent } from './data-window/data-window.component';
import { Routes,RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch:'full'},
  {path: 'main', component: AppComponent}
];

@NgModule({
  exports: [RouterModule],
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SecurityRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
