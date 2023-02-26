import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  isNew: boolean = true;

  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? ''),
    price: new FormControl(this.data?.price ?? ''),
    year: new FormControl(this.data?.year ?? ''),
    chip: new FormControl(this.data?.configure.chip ?? ''),
    ssd: new FormControl(this.data?.configure.ssd ?? ''),
    memory: new FormControl(this.data?.configure.memory ?? ''),
    display: new FormControl(this.data?.configure.display ?? ''),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) {
      this.isNew = false;
    }
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {
    this.data = {
      id: this.myForm.value.id,
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      image: 'assets/images/macbook.jpeg',
      year: this.myForm.value.year,
      configure: {
        chip: this.myForm.value.chip,
        ssd: this.myForm.value.ssd,
        memory: this.myForm.value.memory,
        display: this.myForm.value.display,
      },
    };

    this.dialogRef.close(this.data);
  }
}
