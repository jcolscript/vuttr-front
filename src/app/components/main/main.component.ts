import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { ToolsModel } from 'src/app/models/tool/tool';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tools;
  public load = false;

  constructor(
    public toolsService: ToolsService
  ) { }

  ngOnInit() {
    this.toolsService.Tools.subscribe((data) => {
      this.toolsService.loadTools(data);
      if (data) {
        this.load = true;
      }
    },
    (error) => {
      console.log('erro');
    });

    this.toolsService.tools$.subscribe((tools) => {
      if (tools != null) {
        this.tools = tools;
        console.log(this.tools);
      }
    });

  }

}
