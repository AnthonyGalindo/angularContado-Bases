import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentoContrato } from '../interfaces/documento.interface';

@Injectable({providedIn: 'root'})
export class DocumentoEditService {

    private documntoContrato: DocumentoContrato = {
        ncontrato: '',
        tipo_documento: '',
        documento: '',
        descripcion: '',
        fecha: ''
    }

    
    public get documentoContratoo() : DocumentoContrato {
        return this.documentoContrato;
    }

    
    public set documentoContrato( ele: DocumentoContrato) {
        this.documentoContrato = ele;
    }
    
    

    constructor() { }
    
}