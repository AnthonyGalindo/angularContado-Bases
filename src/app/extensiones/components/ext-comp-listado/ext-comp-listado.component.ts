import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ext-comp-listado',
  templateUrl: './ext-comp-listado.component.html',
  styleUrls: ['./ext-comp-listado.component.css']
})
export class ExtCompListadoComponent implements OnInit {
constructor() {}
  ngOnInit(): void {
    this.dataSource.data = [ 
      {id:'1',cantidad_v: 2000,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario: 0.66},
      {id:'1',cantidad_v: 4897,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario: 0.66},
      {id:'1',cantidad_v: 3898,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario: 0.66},
      {id:'1',cantidad_v: 12997,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario:0.66},
      {id:'1',cantidad_v: 4891,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario: 0.66},
     ];
  }

dataSource = new MatTableDataSource<any>();
displayedColumns: string[] = ['id', 'cantidad_v', 'autorizacion', 'fecha', 'v_unitario','acciones'];

aplicarFiltro(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

editarContrato(extension:any) {
  console.log('veamosd');
  
  console.log(extension);
  
}

}
