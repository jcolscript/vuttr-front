import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ToolComponent } from './components/main/tool/tool.component';

import { ToolsService } from './services/tools.service';
import { ErrorComponent } from './components/dialog/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  entryComponents: [
    ErrorComponent
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
