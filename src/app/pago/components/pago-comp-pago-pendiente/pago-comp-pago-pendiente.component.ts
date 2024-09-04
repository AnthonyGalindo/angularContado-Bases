import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'pago-comp-pago-pendiente',
  templateUrl: './pago-comp-pago-pendiente.component.html',
  styleUrls: ['./pago-comp-pago-pendiente.component.css']
})
export class PagoCompPagoPendienteComponent {

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns:string[] = [
    'fecha',
    'mes',
    'val',
    'estado'
  ];
  constructor(
    // private contratosService: ContratosService,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {}


  ngOnInit(): void {
    // this.contratos = this.contratosService.getContratos;
    this.dataSource.data = [
      {
        fecha:( this.obtenerFechaCompleta( new Date(2024,0,20) )),
        mes:(  this.obtenerMesEnEspanol( new Date(2024,0,20) )),
        val:1519.87,
        estado: 'PAGADO'
        // subtotal:
      },
      {
        fecha:( this.obtenerFechaCompleta( new Date(2024,1,20) )),
        mes:(  this.obtenerMesEnEspanol(new Date(2024,1,20) )),
        val:1975.32,
        estado: 'PENDIENTE'
      },
      {
        fecha:( this.obtenerFechaCompleta( new Date(2024,2,20) ) ),
        mes:(  this.obtenerMesEnEspanol(new Date(2024,2,20) )),
        val:1975.32,
        estado: 'PENDIENTE'
      }
    ]
  }

  obtenerMesEnEspanol(fecha: Date): string {
    const opciones: Intl.DateTimeFormatOptions = { month: 'long' };
    fecha.setMonth( fecha.getMonth() -1 ) ;

    return fecha.toLocaleDateString('es-ES', opciones).toUpperCase();
  }

  obtenerFechaCompleta(fecha: Date): string {
    return fecha.toLocaleDateString('en-CA') ;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
