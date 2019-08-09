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

  setTool(tool: ToolsModel) {
    const endpoint = 'tools';
    return this.http.post(`${env.API_URL}${endpoint}`, tool);
  }

  deleteTool(id: number) {
    const endpoint = 'tools';
    return this.http.delete(`${env.API_URL}${endpoint}/${id}`);
  }

  findName(name: string) {
    const endpoint = 'tools';
    this.http.get(`${env.API_URL}${endpoint}/?q=${name}`).subscribe( (res: any) => {
      this.loadTools(res);
      this.toolsSource$.next(res);
      console.log(res);
    },
    (error) => {
      console.log(error);
    });
  }

  findTags(tag: string) {
    const endpoint = 'tools';
    this.http.get(`${env.API_URL}${endpoint}/?tags_like=${tag}`).subscribe( (res: any) => {
      this.loadTools(res);
      this.toolsSource$.next(res);
      console.log(res);
    },
    (error) => {
      console.log(error);
    });
  }

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
