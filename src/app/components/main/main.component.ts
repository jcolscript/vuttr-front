import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { ToolsModel } from 'src/app/models/tool/tool';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from 'src/app/components/dialog/error/error.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tools;
  public load = false;

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

}
