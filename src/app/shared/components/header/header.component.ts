import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'share-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('wrapper') wrapper!: ElementRef;
  sidebarVisible = true;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    if (this.wrapper) {
      this.wrapper.nativeElement.classList.toggle('toggled', !this.sidebarVisible);
    } else {
      console.error('Wrapper element not found');
    }
  }

  toggleSubMenu(menuId: string) {
    const submenu = document.getElementById(`${menuId}-submenu`);
    if (submenu) {
      submenu.classList.toggle('show');
    }
  }

}
