import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { TwoColumnTileComponent } from './component/two-column-tile/two-column-tile.component';
import { FileSummaryComponent } from './page/file-summary/file-summary.component';
import { FileUploadComponent } from './page/file-upload/file-upload.component';
import { Interceptor } from "./route/interceptor";
import { RoutingModule } from './route/routing.module';
import { TwoColumnContentComponent } from './component/two-column-content/two-column-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    FileUploadComponent,
    HeaderComponent,
    TwoColumnTileComponent,
    FileSummaryComponent,
    TwoColumnContentComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
