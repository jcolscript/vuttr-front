import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ToolComponent } from './components/main/tool/tool.component';
import { ErrorComponent } from './components/dialog/error/error.component';
import { AddToolComponent } from './components/dialog/add-tool/add-tool.component';

import { ToolsService } from './services/tools.service';
import { RemoveToolComponent } from './components/dialog/remove-tool/remove-tool.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolComponent,
    ErrorComponent,
    AddToolComponent,
    RemoveToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ErrorComponent,
    AddToolComponent,
    RemoveToolComponent
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
