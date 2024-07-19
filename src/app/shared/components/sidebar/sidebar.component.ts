import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild('wrapper') wrapper!: ElementRef;

  // @ViewChild('operadoraSubmenu') operadoraSubmenu!: ElementRef
  // @ViewChild('contratoSubmenu') contratoSubmenu!: ElementRef

  sidebarVisible = true;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    if (this.wrapper) {
      this.wrapper.nativeElement.classList.toggle('toggled', !this.sidebarVisible);
    } else {
      console.error('Wrapper element not found');
    }
  }

 
  toggleSubMenu(submenu: HTMLDivElement) {
    if (submenu) {
      // submenu.nativeElement.classList.toggle('show');
      submenu.classList.toggle('show');
    }
  }

}
