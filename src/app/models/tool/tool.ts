import { Injectable } from '@angular/core';

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
