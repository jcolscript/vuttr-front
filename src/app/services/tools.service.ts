import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment as env } from 'src/environments/environment';
import { ToolsModel } from '../models/tool/tool';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private toolsSource$ = new BehaviorSubject<ToolsModel[]>(null);
  tools$ = this.toolsSource$.asObservable();

  constructor(
    public http: HttpClient
  ) { }

  get Tools(): any {
    const endpoint = 'tools';
    return this.http.get(`${env.API_URL}${endpoint}`);
  }

  loadTools(tools: ToolsModel[]) {
    if (!this.toolsSource$.getValue()) {
      this.toolsSource$.next(tools);
    }
  }

}
