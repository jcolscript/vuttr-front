import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-remove-tool',
  templateUrl: './remove-tool.component.html',
  styleUrls: ['./remove-tool.component.scss']
})
export class RemoveToolComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoveToolComponent>,
    public toolsService: ToolsService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  ngOnInit() {
  }

  confirmDelete() {
    this.toolsService.deleteItem(this.data);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
