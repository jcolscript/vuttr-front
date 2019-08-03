import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ToolComponent } from './components/main/tool/tool.component';

import { ToolsService } from './services/tools.service'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
