import { Component, Inject, inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../interface/contrato-interfaces';

@Component({
  selector: 'cont-comp-tabla-mensual',
  templateUrl: './cont-comp-tabla-mensual.component.html',
  styleUrls: ['./cont-comp-tabla-mensual.component.css'],
})
export class ContCompTablaMensualComponent {
  /**
   *
   */

  constructor(
    public dialogRef: MatDialogRef<ContCompTablaMensualComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


