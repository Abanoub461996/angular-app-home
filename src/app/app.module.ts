// MODULES

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { ChartModule } from 'primeng/chart';

// SERVICES and PROVIDERS
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// COMPONENTS
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { SidePanelComponent } from './pages/home-page/side-panel/side-panel.component';
import { SidePanelCardComponent } from './pages/home-page/side-panel/side-panel-card/side-panel-card.component';
import { ReadingsWrapperComponent } from './pages/home-page/readings-wrapper/readings-wrapper.component';
import { UserReadingsComponent } from './pages/home-page/readings-wrapper/user-readings/user-readings.component';
import { SystemReadingsComponent } from './pages/home-page/readings-wrapper/system-readings/system-readings.component';
import { StatisticsComponent } from './pages/home-page/readings-wrapper/statistics/statistics.component';
import { TableComponentComponent } from './pages/home-page/table-component/table-component.component';

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
        StatisticsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        TableModule,
        ButtonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DropdownModule,
        ChartModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        TableComponentComponent
    ]
})
export class AppModule { }
