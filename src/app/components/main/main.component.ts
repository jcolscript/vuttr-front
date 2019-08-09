import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { ToolsModel } from 'src/app/models/tool/tool';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from 'src/app/components/dialog/error/error.component';
import { AddToolComponent } from '../dialog/add-tool/add-tool.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tools;
  public load = false;
  public search;
  public isTags;

  constructor(
    public toolsService: ToolsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.toolsService.Tools.subscribe((data) => {
      this.toolsService.loadTools(data);
      if (data) {
        this.load = true;
      }
    },
    (error) => {
      console.log(error);
      this.dialog.open(ErrorComponent, {
        width: '400px',
        height: '332px',
        data: { msg: 'Ops... Isso não costuma acontecer. Tente um novo acesso mais tarde' }
      });
    });

    this.toolsService.tools$.subscribe((tools) => {
      if (tools != null) {
        this.tools = tools;
        console.log(this.tools);
      }
    });
  }

  findTool() {
    if (!this.isTags) {
      this.toolsService.findName(this.search);
    } else {
      this.toolsService.findTags(this.search);
    }

  }

  deleteItem(item: number) {
    if (typeof item === 'number') {
      this.toolsService.deleteTool(item).subscribe( (res) => {
        const index = this.tools.findIndex(tool => tool.id === item);
        this.tools.splice(index, 1);
        this.toolsService.loadTools(this.tools);
        console.log(res);
      },
      (error) => {
        console.log(error);
      });
    }
  }

  addToolModal() {
    this.dialog.open(AddToolComponent, {
      width: '570px',
    });
  }

}
