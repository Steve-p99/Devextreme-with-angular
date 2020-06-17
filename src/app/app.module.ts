import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServService } from './serv.service';
import { DevExtremeModule} from 'devextreme-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
