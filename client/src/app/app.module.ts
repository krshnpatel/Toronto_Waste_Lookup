import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MzInputModule, MzButtonModule, MzIconModule, MzIconMdiModule, MzCollectionModule } from 'ngx-materialize';
import { HTMLEscapeUnescapeModule } from 'html-escape-unescape';

import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MzInputModule,
    MzButtonModule,
    MzIconModule,
    MzIconMdiModule,
    MzCollectionModule,
    HTMLEscapeUnescapeModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
