import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToolsModel } from 'src/app/models/tool/tool';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {

  public formNewTool: FormGroup;
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  public tags: string[] = [];
  public tool = new ToolsModel();

  constructor(
    public dialogRef: MatDialogRef<AddToolComponent>,
    private fb: FormBuilder,
    private toolsService: ToolsService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.formNewTool = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      link: this.fb.control(null, [Validators.required]),
      description: this.fb.control(null, [Validators.required])
    });
  }

  ngOnInit() {
  }

  get name() {
    return this.formNewTool.get('name');
  }

  get link() {
    return this.formNewTool.get('link');
  }

  get description() {
    return this.formNewTool.get('description');
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tags
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  addTool() {
    this.tool.id = Math.floor(Math.random() * 100);
    this.tool.link = this.link.value;
    this.tool.title = this.name.value;
    this.tool.description = this.description.value;
    this.tool.tags = this.tags;

    this.toolsService.setTool(this.tool);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
