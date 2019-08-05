import { Component, OnInit, Input } from '@angular/core';
import { ToolsModel } from 'src/app/models/tool/tool';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  @Input() public tool: ToolsModel;

  constructor() { }

  ngOnInit() {
  }

}
