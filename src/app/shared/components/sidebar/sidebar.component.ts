import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatIcons } from '../../interfaces/mat-icons.interfaces';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('wrapperSide') wrapperSide!: ElementRef;
  @ViewChildren('menu') menu!: QueryList<ElementRef>;

  matIcons: MatIcons[] = [
    {
      Nombre: 'operadora',
      valor: 'keyboard_arrow_right',
    },
    {
      Nombre: 'contrato',
      valor: 'keyboard_arrow_right',
    },
    {
      Nombre: 'extencion',
      valor: 'keyboard_arrow_right',
    },
    {
      Nombre: 'documento',
      valor: 'keyboard_arrow_right',
    },
    {
      Nombre: 'pago',
      valor: 'keyboard_arrow_right',
    },
  ];

  sidebarVisible = true;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    if (this.wrapper) {
      this.wrapper.nativeElement.classList.toggle( 'toggled',  !this.sidebarVisible);
    } else {
      console.error('Wrapper element not found');
    }
  }

  toggleSubMenu(submenu: HTMLDivElement, idMenu: string) {
    if (submenu) {
      submenu.classList.toggle('show');
      this.menu.forEach((menu: ElementRef) => {
        if (menu.nativeElement.classList.contains(idMenu)) {
        } else {
          menu.nativeElement.classList.remove('show');
        }
      });

      this.togleIcon(idMenu);
      this.togleIcons(idMenu);
    }
  }

  togleIcon(idMenu: string) {
    this.matIcons.forEach((matIcon) => {
      if (matIcon.Nombre == idMenu) {
        matIcon.valor == 'keyboard_arrow_right'
          ? (matIcon.valor = 'keyboard_arrow_down')
          : (matIcon.valor = 'keyboard_arrow_right');
      }
    });
  }

  togleIcons(idMenu: string) {
    this.matIcons.forEach((matIcon) => {
      if (!(matIcon.Nombre == idMenu)) {
        matIcon.valor == 'keyboard_arrow_right'
          ? (matIcon.valor = 'keyboard_arrow_right')
          : (matIcon.valor = 'keyboard_arrow_right');
      }
    });
  }
}
