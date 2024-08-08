import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { listadoOperadora } from '../../interfaces/interfaces-Operadora';

@Component({
  selector: 'ope-listado-operadora',
  templateUrl: './listado-operadora.component.html',
  styleUrls: ['./listado-operadora.component.css'],
})
export class ListadoOperadoraComponent implements OnInit, AfterViewInit {
  constructor(private _liveAnnouncer: LiveAnnouncer, private router: Router) {}
  darta_arr: listadoOperadora[] = [
    {
      position: '1',
      nombre: 'Movistar',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Eduardo Reyes',
    },
    {
      position: '2',
      nombre: 'Claro',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Carlos Villagran',
    },
    {
      position: '3',
      nombre: 'Cnt',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Edgar vivar',
    },
    {
      position: '4',
      nombre: 'Twenti',
      ruc: '9145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '5',
      nombre: 'Aki',
      ruc: '1145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '6',
      nombre: 'Netlife',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '7',
      nombre: 'Speedy',
      ruc: '145446478912',
      telefono1: '12234567',
      telefono2: '7894531',
      representante: 'Roberto Gomez',
    },
    {
      position: '8',
      nombre: 'Aki',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '9',
      nombre: 'Netlife',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '10',
      nombre: 'Speedy',
      ruc: '145446478912',
      telefono1: '12234567',
      telefono2: '7894531',
      representante: 'Pedro Marin',
    },
  ];

  displayedColumnss: string[] = [
    'position',
    'nombre',
    'ruc',
    'telefono1',
    'telefono2',
    'representante',
    'icons',
  ];

  // dataSourcee = this.darta_arr;
  dataSource = new MatTableDataSource(this.darta_arr);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  

  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editarOperadora(elemento: listadoOperadora) {
    console.log(elemento);
    this.router.navigate(['/operadora/editar', elemento]);
  }
}
