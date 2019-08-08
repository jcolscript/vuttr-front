import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ToolComponent } from './components/main/tool/tool.component';
import { ErrorComponent } from './components/dialog/error/error.component';
import { AddToolComponent } from './components/dialog/add-tool/add-tool.component';

import { ToolsService } from './services/tools.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolComponent,
    ErrorComponent,
    AddToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule
  ],
  entryComponents: [
    ErrorComponent,
    AddToolComponent
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
