import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listadoOperadora } from '../../interfaces/interfaces-Operadora';
import { Observable, pipe } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ope-editar',
  templateUrl: './ope-edicion.component.html',
  styleUrls: ['./ope-edicion.component.css'],
})
export class OpeEdicionComponent implements OnInit{


  operadoraEdicionForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { 

    this.llamarForm();

     this.operadoraEdicionForm = this.fb.group({
      nombres: [this.operadoraa.nombre],
      apellidos: [this.operadoraa.representante],
      email: [''],
      telefono: [''],
      nombreOpe: [''],
      rucOpe: [''],
      telefono1Ope: [''],
      telefono2Ope: [''],
      direccionOpe: [''],
      observacionOpe: [''],
    });
    
  }


  operadoraa: listadoOperadora = {
    position: '',
    nombre: '',
    ruc: '',
    telefono1: '',
    telefono2: '',
    representante: '',
  };
  
 

  ngOnInit() {  
      this.llamarForm() ;
  }

  llamarForm(){
    
    this.route.paramMap.subscribe((resp) => {
      console.log('funca');

      this.operadoraa.position = resp.get('position')!;
      this.operadoraa.nombre = resp.get('nombre')!;
      this.operadoraa.ruc = resp.get('ruc')!;
      this.operadoraa.telefono1 = resp.get('telefono1')!;
      this.operadoraa.telefono2 = resp.get('telefono2')!;
      this.operadoraa.representante = resp.get('representante')!;

      console.log(this.operadoraa);
     
      
    });

   


  }



  SendEdicionOperadora() {}

  @ViewChild('editOperadora') ope!: any;

  ventana: boolean = true;

  changeVentana(response: boolean) {
    this.ventana = response;
  }
}
