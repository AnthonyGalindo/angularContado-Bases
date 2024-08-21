import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentoEditService } from '../../services/documento-edit.service';
import { DocumentoContrato } from '../../interfaces/documento.interface';

@Component({
  selector: 'doc-cambiar',
  templateUrl: './doc-cambiar.component.html',
  styleUrls: ['./doc-cambiar.component.css']
})
export class DocCambiarComponent {

  private documentoContrato ?: DocumentoContrato ;
  constructor(private editSer: DocumentoEditService,
    private fb : FormBuilder
  ) {}
  ngOnInit() {
    this.documentoContrato = this.editSer.gdocumentosContrato;
    this.llenarFormulario();
  }
  private llenarFormulario() {
    this.formEditDocCont.get('nombre_documento')?.setValue(this.documentoContrato?.documento);
    this.formEditDocCont.get('descripcion_documento')?.setValue(this.documentoContrato?.descripcion);
    this.formEditDocCont.get('tipo_contrato')?.setValue(this.documentoContrato?.tipo_documento);
  }
  public formEditDocCont: FormGroup = this.fb.group({
    tipo_contrato: [''],
    nombre_documento: [''],
    descripcion_documento:[''],
  });
  public tipoContratos = [
    {
      tipo_documento: 'tipo-3',
      tipo_nombre: 'Contrato escojido',
    },
    {
      tipo_documento: 'tipo-2',
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
