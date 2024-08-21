import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentoContrato } from '../interfaces/documento.interface';

@Injectable({providedIn: 'root'})
export class DocumentoEditService {

    private documentoContrato: DocumentoContrato = {
        ncontrato: '',
        tipo_documento: '',
        documento: '',
        descripcion: '',
        fecha: ''
    }

    
    public get gdocumentosContrato() : DocumentoContrato {
        return this.documentoContrato;
    }

    
    public set sdocumentosContrato( ele: DocumentoContrato) {
        this.documentoContrato = ele;
    }
    

    constructor() { }
    
}