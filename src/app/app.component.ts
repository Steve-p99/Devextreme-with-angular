import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxChartModule } from 'devextreme-angular';

import { Population, ServService } from './serv.service';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServService]
})

export class AppComponent {
  populationData: Population[];

  constructor(service: ServService) {
      this.populationData = service.getPopulationData();
  }

  customizeItems(items) {
      var sortedItems = [];

      items.forEach(function(item) {
          var startIndex = item.series.stack === "male" ? 0 : 3;
          sortedItems.splice(startIndex, 0, item);
      });
      return sortedItems;
  }
}

@NgModule({
  imports: [
      BrowserModule,
      DxChartModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);