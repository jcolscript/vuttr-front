import { Injectable, OnInit } from '@angular/core';

import { ToolsService } from 'src/app/services/tools.service';

@Injectable({
  providedIn: 'root'
})
export class ToolsModel {

  public id?: number;
  public title?: string;
  public link?: string;
  public description?: string;
  public tags?: string[];

  constructor() {}
}