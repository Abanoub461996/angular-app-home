import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { SidePanelComponent } from './pages/home-page/side-panel/side-panel.component';
import { SidePanelCardComponent } from './pages/home-page/side-panel/side-panel-card/side-panel-card.component';
import { ReadingsWrapperComponent } from './pages/home-page/readings-wrapper/readings-wrapper.component';
import { UserReadingsComponent } from './pages/home-page/readings-wrapper/user-readings/user-readings.component';
import { SystemReadingsComponent } from './pages/home-page/readings-wrapper/system-readings/system-readings.component';
import { StatisticsComponent } from './pages/home-page/readings-wrapper/statistics/statistics.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SidebarComponent,
    SidePanelComponent,
    SidePanelCardComponent,
    ReadingsWrapperComponent,
    UserReadingsComponent,
    SystemReadingsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
    }),
    // TranslateLoader,
    // TranslateHttpLoader,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
