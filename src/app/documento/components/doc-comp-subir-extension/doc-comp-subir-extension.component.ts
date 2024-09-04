import { Component, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'doc-comp-subir-extension',
  templateUrl: './doc-comp-subir-extension.component.html',
  styleUrls: ['./doc-comp-subir-extension.component.css']
})
export class DocCompSubirExtensionComponent {

  public tipoContratos = [
    {
      tipo_id: '1224qwe',
      tipo_nombre: 'Contrato de Alquiler',
    },
    {
      tipo_id: '777887qr',
      tipo_nombre: 'Contrato de Extension',
    },
  ];

  name = 'Angular ' + VERSION.major;
  display: FormControl = new FormControl('', Validators.required);
  file_store!: FileList;
  file_list: Array<string> = [];

  handleFileInputChange(l: FileList): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : '';
      this.display.patchValue(`${f.name}${count}`);
    } else {
      this.display.patchValue('');
    }
  }

  handleSubmit(): void {
    var fd = new FormData();
    this.file_list = [];
    for (let i = 0; i < this.file_store.length; i++) {
      fd.append('files', this.file_store[i], this.file_store[i].name);
      this.file_list.push(this.file_store[i].name);
    }
  }
}
