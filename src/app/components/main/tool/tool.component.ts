import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToolsModel } from 'src/app/models/tool/tool';
import { MatDialog } from '@angular/material';
import { RemoveToolComponent } from '../../dialog/remove-tool/remove-tool.component';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  @Input() public tool: ToolsModel;
  @Output() itemDeleted = new EventEmitter();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  deleteItemModal(item: number) {
    this.dialog.open(RemoveToolComponent, {
      width: '500px',
      height: '230px',
      data: item
    });
  }

}
