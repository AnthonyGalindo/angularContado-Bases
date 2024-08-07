import { Component, OnInit } from '@angular/core';
import { ContratosService } from '../../services/contrato-listado.service';
import { MatTableDataSource } from '@angular/material/table';
import { Contrato } from '../../interface/contrato-listado.interfaces';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-cont-visualizar',
  templateUrl: './cont-visualizar.component.html',
  styleUrls: ['./cont-visualizar.component.css']
})
export class ContVisualizarComponent implements OnInit {

  contratos: Contrato[] = []

  seleccionada: SelectionModel<Contrato> = new SelectionModel<Contrato>(true, []);
  displayedColumns: string[] = ['dicon_codigo', 'dicon_numero', 'dicon_fecha_firma', 'dictp_codigo_tipo_contrato', 'dicon_cantidad', 'select'];
  dataSource = new MatTableDataSource<Contrato>();

  constructor(private contratosService: ContratosService) { }
  ngOnInit(): void {
  
    this.contratos = this.contratosService.getContratos;
    this.dataSource.data = this.contratos;
  }

  


  getSelectedRowInfo(): void {
    const selectedRows = this.seleccionada.selected;
    if (selectedRows.length > 0) {
      selectedRows.forEach(row => {
        console.log(row); // Aquí puedes manejar la información de la fila seleccionada
       // Ejemplo para mostrar la información en una alerta
      });
    } else {
      console.log('No hay filas seleccionadas');
    }
  }


}







    /* this.contratosService.getContratos().subscribe(contratos => {
      this.dataSource.data = contratos;
    });*/