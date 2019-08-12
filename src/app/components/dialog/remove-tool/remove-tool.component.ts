import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-remove-tool',
  templateUrl: './remove-tool.component.html',
  styleUrls: ['./remove-tool.component.scss']
})
export class RemoveToolComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoveToolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit() {
  }

}
